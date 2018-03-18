
import * as fs from 'fs-extra';
import { showError, showSuccess, showInfo1, showInfo } from './log';
import { spawn } from 'cross-spawn';
import * as replace from 'replace-in-file';

export function isEmptyString(obj: string) {
    return obj == null || obj.trim() === '';
}

export function assertNotEmpty(obj: string, msg: string) {
    if (isEmptyString(obj)) {
        throw new Error(msg);
    }
}

export function copyFile(source: string, target: string) {
    showInfo(`copying file from ${source} to ${target}...`);

    return fs.createReadStream(source).pipe(fs.createWriteStream(target));
}

export function copyDirectory(source: string, destination: string) {
    showInfo(`copying directory from ${source} to ${destination}...`);

    return fs.copy(source, destination)
        .then(() => showSuccess(`${destination} created!`))
        .catch((err: any) => showError('While copying directory error occurred:', err));
}

export function install(destination: string) {
    showInfo('installing npm packages...');

    return new Promise((resolve: any, reject: any) => {
        let command;
        let args;
        showSuccess('Installing packages. This might take a couple of minutes.');
        command = 'npm';
        args = [
            'install',
            '--save',
            '--save-exact',
            '--loglevel',
            'error',
        ];

        const child = spawn(command, args, { stdio: 'inherit', cwd: destination });
        child.on('close', (code: any) => {
            if (code !== 0) {
                reject({
                    command: `${command} ${args.join(' ')}`,
                });

                return;
            }
            resolve();
        });
    });
}

export function replaceValues(replaceOptions: any, packageName: string) {
    showInfo('replacing values...');

    return new Promise((resolve: any, reject: any) => {
        replace(replaceOptions, (error: any, changes: string[]) => {
            if (error) {
                reject(error);

                return showError('While replacing Values error occurred:', error);
            }
            showInfo(`Npm Package name: ${packageName} is applied successfully to ${changes.length} files!`);
            showInfo('Below are the Modified Files:\n', changes.join('\n'));
            resolve();
        });
    });
}

// tslint:disable-next-line:typedef
export function fakeLog(msg: any) {
    // tslint:disable-next-line:no-parameter-reassignment
    msg = '';
    console.log(msg);
}

export const handleError = (msg: string, err: any) => {
    if (err) {
        throw err;
    }
    showError(msg);
    process.exit(1);
};

export function runNpm(destination: string, cmd: string, msg?: string) {
    showInfo1(msg ? msg : 'running npm script...');

    return new Promise((resolve: any, reject: any) => {
        let command;
        let args;
        command = 'npm';
        args = [
            'run',
            cmd,
        ];
        const child = spawn(command, args, { stdio: 'inherit', cwd: destination });
        child.on('close', (code: any) => {
            if (code !== 0) {
                reject({
                    command: `${command} ${args.join(' ')}`,
                });

                return;
            }
            resolve();
        });
    });

}
