import * as path from 'path';

export const rootLocation = (name: string = '') => path.join(__dirname, '../', name);

export const distLocation = () => rootLocation('dist');

export const templatesPathInDistFolder = () => `${distLocation()}\\templates`;

export function getTemplatePath(templateName: string = '') {
  return `${rootLocation('templates')}/${templateName}`;
}

export const workingDirectory = () => process.cwd();
