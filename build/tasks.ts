import {
  copyDirectory,
  copyFile,
  distLocation,
  npmSpawn,
  getTemplatePath,
  rootLocation,
  templatesPathInDistFolder,
} from '../utils';

export function copyPackageJsonFile() {
  return copyFile(
    `${rootLocation()}package.json`,
    `${distLocation()}\\package.json`,
  );
}

export function copyReadMeFile() {
  return copyFile(
    `${rootLocation()}README.md`,
    `${distLocation()}\\README.md`,
  );
}

export function copyTemplatesFolder() {
  return copyDirectory(
    getTemplatePath(),
    templatesPathInDistFolder(),
  );
}

export function removeDistFolder() {
  return npmSpawn('rimraf', [distLocation()]);
}

export function build() {
  return npmSpawn('tsc', ['-p', rootLocation('tsconfig.release.json')]);
}

// tslint:disable-next-line:no-empty
export function noop() {

}
