import * as cp from 'child_process';
import * as cliSpinners from 'cli-spinners';
import * as spawn from 'cross-spawn';
import * as fsExtra from 'fs-extra';
import * as ora from 'ora';
import * as replace from 'replace-in-file';

import { distLocation, logInfo2 } from '.';
import { rootLocation } from './location';
import { logError, logInfo } from './log';

export interface Config {
  source?: string;
  target?: string;
  replaceValuesOptions?: any;
}

export type TaskBuilder = (config?: Config) => Promise<any>;

export type RunnerFn = (config: Config) => Promise<any> | null;

export type TaskName = null | string;

export type TaskDef = [TaskName, RunnerFn];

export type BaseFn = (command: string) => string;

export const npmPath = `${rootLocation()}node_modules/.bin/`;

export async function runAsyncTaskWithSpinner(text: string, taskFn?: () => Promise<any>) {
  const options = {
    text,
    spinner: cliSpinners.runner,
  };
  const spinner = ora(options);
  try {
    spinner.start();

    await taskFn();

    spinner.succeed();
  } catch (e) {
    spinner.fail();
    throw e;
  }
}

export function createTaskRunners(tasks: TaskDef[]): TaskBuilder {
  return async (config: Config = {}) => {
    try {
      for (const [name, runner] of tasks) {
        if (!name) {
          await runner(config);
          continue;
        }
        if (!runner) {
          await runFakeTask(name);
          continue;
        }
        await runAsyncTaskWithSpinner(name, () => runner(config));
      }
    } catch (e) {
      logError('error:', e);
    }
  };
}

export function copyFile(source: string, target: string): Promise<any> {
  return new Promise((resolve: any) => {
    fsExtra.createReadStream(source).pipe(fsExtra.createWriteStream(target));
    resolve();
  });
}

export function replaceValues(replaceOptions: any): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    replace(replaceOptions, (er: any, changes: string[]) => {
      if (er) {
        reject(er);
      }
      resolve(changes);
    });
  });
}

export function copyDirectory(source: string, target: string): Promise<any> {
  return fsExtra.copy(source, target);
}

export function handleError(err: any) {
  if (err) {
    logError('error :', err);
    throw err;
  }
  process.exit(1);
}

export function exec(workingDirectory: string, args: string[]): Promise<string> {
  return new Promise((resolve: any, reject: any) => {
    cp.exec(`${args.join(' ')}`, { cwd: workingDirectory }, (err: any, stdout: any) => {
      if (err) {
        return reject(err);
      }

      resolve(stdout.toString());
    });
  });
}

export function npmLink() {
  return exec(distLocation(), ['npm', 'link']);
}

export function npmInstall(workingDirectory: string) {
  const args = [
    'npm',
    'install',
    '--save',
    '--save-exact',
    '--loglevel',
    'error',
  ];

  return exec(workingDirectory, args);
}

export function npmSpawn(
  command: string,
  args: string[],
  base: string = npmPath,
): Promise<any | string> {

  return new Promise(handleExec);

  function handleExec(resolve: (data?: any) => void, reject: (reason?: any) => void) {
    const child = spawn(command, args, { stdio: 'inherit', cwd: base });
    child.on('error', (err: any) => {
      logError(err);
      process.exit(1);
    });
    child.on('close', (code: any) => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
          error: JSON.stringify(child.stderr),
        });

        return;
      }
      resolve(child.stdio);
    });
  }
}

// export function npmLink() {
//   return exec('npm', ['link'], distLocation());
// }

function runFakeTask(name: string) {
  logInfo2(name);

  return Promise.resolve('done');
}

export function runSyncTask(name: string) {
  logInfo(name);
}

export function cmd(command: string, args: string[]): Promise<string> {
  return npmSpawn(command, args, npmPath);
}

export function git(args: string[]): Promise<string> {
  return cmd('git', args);
}
