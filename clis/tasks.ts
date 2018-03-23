import { Config, copyDirectory, replaceValues, logInfo1, npmInstall, npmSpawn } from '../utils';

export interface UserEntries {
  description: string;
  dir: string;
  app?: string;
  service: string;
  linkservice?: string;
  feature?: string;
}
export interface CliConfig extends Config {
  logOptions?: UserEntries;
  npmCmd?: string;
  greetingMessage?: string;
}

export async function logUserEnteredValuesTask(config: CliConfig): Promise<any> {
  return new Promise((resolve: any) => {
    const {
      description,
      app,
      dir,
      service,
      linkservice,
      feature,
    } = config.logOptions;

    if (description) {
      logInfo1('   description   : ', description);
    }
    if (linkservice) {
      logInfo1('   linkservice   : ', linkservice);
    }
    if (feature) {
      logInfo1('   feature       : ', feature);
    }
    if (service) {
      logInfo1('   service       : ', service);
    }
    if (dir) {
      logInfo1('   dir           : ', dir);
    }
    if (app) {
      logInfo1('   app           : ', app);
    }

    return resolve('Logging done!');
  });

}

export function npmInstallTask({ target }: CliConfig) {
  return npmInstall(target);
}

export function npmTask({ target, npmCmd }: CliConfig) {
  return npmSpawn('npm', ['run', npmCmd], target);
}

export function copyDirectoryTask({ source, target }: CliConfig) {
  return copyDirectory(source, target);
}

export function replaceValuesTask({ replaceValuesOptions }: CliConfig) {
  return replaceValues(replaceValuesOptions);
}

export const goodByeText = '   Thank you for using Template CLI !    \nExplore the various tools available and their corresponding documentation. \nIf you are interested in contributing to the platform, \nplease visit the contribution section at https://goo.gl/92wFki. \nPlease send your valuable feedback to ScrumDriverDev@STRASZ.COM ';

export const welcomeText = '   Welcome to SCCI Template CLI !   ';
