
import * as chalkModule from 'chalk';
const chalk = chalkModule.default;
const log = console.log;
const logVerbose = true;

export function fakeLog(msg: any) {
  return () => msg;
}

export function logError(msg: string, ...optionalParams: any[]) {
  return log(
    chalk.black.bgRed(msg),
    getParams(optionalParams));
}

export function logSuccess(msg: string, ...optionalParams: any[]) {
  return log(
    chalk.black.bgGreen(msg),
    getParams(optionalParams));
}

export function logWarning(msg: string, ...optionalParams: any[]) {
  if (!logVerbose) { return; }

  return log(
    chalk.black.bgYellow(msg),
    getParams(optionalParams));
}

export function logInfo(msg: string, ...optionalParams: any[]) {
  if (!logVerbose) { return; }

  return log(
    chalk.black.bgCyan(msg),
    getParams(optionalParams));
}

export function logInfo1(msg: string, msg2: string) {
  return log(
    chalk.black.bgMagenta(msg),
    chalk.magenta(msg2));
}

export function logInfo2(msg: string, ...optionalParams: any[]) {
  return log(
    chalk.black.bgGreen(msg),
    getParams(optionalParams));
}

function getParams(p: any[]): any {
  return (!p || p.length < 1) ? '' : p.pop();
}
