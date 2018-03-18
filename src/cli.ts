#!/usr/bin/env node

import * as yargs from 'yargs';
import * as ngrxCli from './ngrx-cli';
import * as compAppCli from './composite-app-cli';
import * as ngCli from './ng-cli';
import * as tsOnlyCli from './ts-only-cli';
import * as open from 'opn';
import { handleError, fakeLog } from './utility';

const argv = yargs
    .version()
    .usage('Usage: template-cli <command> [options]')
    .command(['ngrx [dir]', 'initialize', 'i'], 'Initialize the ngrx app directory', ngrxCli)
    .example('template-cli ngrx my-project --service blue --feature jeans --description "blue jeans are nice"', 'Initialize `my-project` directory with `ngrx-autonomous-component` template for `blue` service and `jeans` feature')
    .example('template-cli ngrx my-project -s blue -f jeans -d "blue jeans are nice"', 'Initialize `my-project` directory with `ngrx-autonomous-component` template for `blue` service and `jeans` feature')
    .command(['ngrx-comp [dir]', 'initialize', 'i'], 'Initialize the ngrx-composite-app directory', compAppCli)
    .example('template-cli ngrx-comp my-composite-app --service branding --app my-composite-app --description "this app is a composite ui sample"', 'Initialize `my-composite-app` directory with `ngrx-composite-app` template for `branding` service and `my-composite-app` app name')
    .example('template-cli ngrx-comp my-composite-app -s branding -a my-composite-app -d "this app is a composite ui sample"', 'Initialize `my-composite-app` directory with `ngrx-composite-app` template for `branding` service and `my-composite-app` app name')
    .command(['ng [dir]', 'initialize', 'i'], 'Initialize the angular-app directory', ngCli)
    .example('template-cli ng my-ng-project --service orange --feature ui-layout --description "sample angular component app"', 'Initialize `my-ng-project` directory with `ng-autonomous-component` template for `orange` service and `ui-layout` feature')
    .example('template-cli ng my-ng-project -s orange -f ui-layout -d "sample angular component app"', 'Initialize `my-ng-project` directory with `ng-autonomous-component` template for `orange` service and `ui-layout` feature')
    .command(['ts [dir]', 'initialize', 'i'], 'Initialize the typescript app directory', tsOnlyCli)
    .example('template-cli ts my-ts-project --service branding --feature assertion-concerns --description "sample typescript project"', 'Initialize `my-ts-project` directory with `autonomous-component` template for `branding` service and `assertion-concerns` feature')
    .example('template-cli ts my-ts-project -s branding -f assertion-concerns -d "sample typescript project"', 'Initialize `my-ts-project` directory with `autonomous-component` template for `branding` service and `assertion-concerns` feature')
    .command(['docs'], 'Go to the documentation at https://goo.gl/Jhvi7m', {}, (_: any) => open('https://goo.gl/Jhvi7m'))
    .demandCommand(1, 'You need at least one command before moving on')
    .help('h')
    .alias('h', 'help')
    .epilogue('for more information, find the documentation at https://goo.gl/Jhvi7m')
    .fail(handleError)
    .argv;

fakeLog(argv);
