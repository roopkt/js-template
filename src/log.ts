
import * as chalkModule from 'chalk';
const chalk = chalkModule.default;
const log = console.log;
const logVerbose = true;

export function showError(msg: string, ...optionalParams: any[]) {

    return log(chalk.black.bgRed(msg),
        <any>optionalParams || '');
}

export function showSuccess(msg: string, ...optionalParams: any[]) {

    return log(
        chalk.black.bgGreen(msg),
        <any>optionalParams || '');
}

export function showInfo(msg: string, ...optionalParams: any[]) {
    if (!logVerbose) { return; }

    return log(
        chalk.black.bgYellow(msg),
        <any>optionalParams || '');
}

export function showInfo1(msg: string, ...optionalParams: any[]) {

    return log(
        chalk.black.bgMagenta(msg),
        <any>optionalParams || '');
}
