import { handleError, createTaskRunners, TaskDef, TaskBuilder } from '../utils';
import * as tasks from './tasks';

export const deployBuildTasks: TaskDef[] = [
  [
    'Removing "../dist" Folder', tasks.removeDistFolder,
  ],
  [
    'Compilling Typescript Files', tasks.build,
  ],
  [
    'Copying Templates Folder', tasks.copyTemplatesFolder,
  ],
  [
    'Copying readme.md File', tasks.copyReadMeFile,
  ],
  [
    'Copying package.json File', tasks.copyPackageJsonFile,
  ],
];

export const deployBuild: TaskBuilder = createTaskRunners(deployBuildTasks);

deployBuild().catch(handleError);
