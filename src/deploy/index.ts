
import * as path from 'path';
import { copyDirectory, copyFile } from '../utility';

// copy templates
const source = `${__dirname}/dough`;
const destination = path.join(__dirname, '../../', 'dist');
copyDirectory(source, destination);

// copy package.json
const root = path.join(__dirname, '../../');
const packageJson = `${root}package.json`;
const packageJsonTarget = `${destination}/package.json`;
copyFile(packageJson, packageJsonTarget);















