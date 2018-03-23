import { createTaskRunners, getTemplatePath, handleError, workingDirectory } from '../utils';
import {
  CliConfig,
  copyDirectoryTask,
  goodByeText,
  logUserEnteredValuesTask,
  npmInstallTask,
  replaceValuesTask,
  UserEntries,
  welcomeText,
} from './tasks';

export const handler = init;

export const builder = (_: any) => _
  .option('service', { alias: 's', default: 'branding' })
  .option('app', { alias: 'a', default: 'ngrx-composite-app-for-fun' })
  .option('description', { alias: 'd', default: 'sample composite app' })
  .option('linkservice', { alias: 'l', default: '@scci-products/product-management' });

async function init({
  description,
  dir,
  app,
  service,
  linkservice }: UserEntries,
) {
  const packageName = `@scci-${service}/${app}`;
  const target = `${workingDirectory()}/${dir}`;
  const cliConfig: CliConfig = {
    source: `${getTemplatePath('ngrx-composite-app')}`,
    target,
    replaceValuesOptions: {
      files: [`${target}/**/*`],
      ignore: [`${target}/node_modules/**/*`],
      from: [
        /@scci-branding\/ngrx-composite/g,
        'compositeApp description',
        'CompositeApp',
        '@scci-servicename/featurename',
      ],
      to: [
        `${packageName}`,
        `${description}`,
        `${packageName}`,
        `${linkservice}`,
      ],
    },
    logOptions: {
      description,
      dir,
      app,
      service,
      linkservice,
    },
  };

  const taskRunners = createTaskRunners([
    [welcomeText, null],
    [null, logUserEnteredValuesTask],
    [
      `Copying Ngrx Composite App for ${packageName}`, copyDirectoryTask,
    ],
    [
      'Replacing Template Default Values with Supplied Values', replaceValuesTask,
    ],
    [
      'Installing Npm Packages. This might take a couple of minutes', npmInstallTask,
    ],
    [goodByeText, null],
  ]);

  await taskRunners(cliConfig).catch(handleError);
}
