import { createTaskRunners, getTemplatePath, handleError, workingDirectory } from '../utils';
import {
  CliConfig,
  copyDirectoryTask,
  goodByeText,
  logUserEnteredValuesTask,
  npmInstallTask,
  npmTask,
  replaceValuesTask,
  UserEntries,
  welcomeText,
} from './tasks';

export const handler = init;

export const builder = (_: any) => _
  .option('service', { alias: 's', default: 'branding' })
  .option('feature', { alias: 'f', default: 'product-management' })
  .option('description', { alias: 'd', default: 'ngrx example' });

async function init({
  description,
  dir,
  feature,
  service,
}: UserEntries) {
  const packageName = `@scci-${service}/${feature}`;
  const target = `${workingDirectory()}/${dir}`;
  const cliConfig: CliConfig = {
    source: `${getTemplatePath('ngrx-autonomous-component')}`,
    target,
    replaceValuesOptions: {
      files: [`${target}/**/*`],
      ignore: [`${target}/node_modules/**/*`],
      from: [
        /@scci-servicename\/featurename/g,
        'feature description',
        'feature-state',
        'servicename',
      ],
      to: [
        `${packageName}`,
        `${description}`,
        `${feature}-state`,
        `${service}`,
      ],
    }, logOptions: {
      description,
      dir,
      service,
      feature,
    },
    npmCmd: 'example:start:launch',
  };

  const taskRunners = createTaskRunners([
    [welcomeText, null],
    [null, logUserEnteredValuesTask],
    [
      `Copying Ngrx App for ${packageName}`, copyDirectoryTask,
    ],
    [
      'Replacing Template Default Values with Supplied Values', replaceValuesTask,
    ],
    [
      'Installing Npm Packages. This might take a couple of minutes', npmInstallTask,
    ],
    [goodByeText, null],
    [null, npmTask],
  ]);

  await taskRunners(cliConfig).catch(handleError);
}
