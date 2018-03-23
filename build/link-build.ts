import { welcomeText, goodByeText } from '../clis/tasks';
import { createTaskRunners, handleError, TaskDef, npmLink } from '../utils';
import * as tasks from './tasks';

async function run() {
  const libLinkTasks: TaskDef[] = [
    [welcomeText, null],
    [
      'Removing "../dist" Folder', tasks.removeDistFolder,
    ],
    [
      'Compiling Typescript Files', tasks.build,
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
    ['Running Npm Link. This might take a couple of minutes', npmLink]
    ,
    [goodByeText, null],
  ];

  const taskRunner = createTaskRunners(libLinkTasks);

  await taskRunner().catch(handleError);
}

run();
