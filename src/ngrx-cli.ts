import { assertNotEmpty, copyDirectory, install, runNpm, replaceValues } from './utility';
import { showInfo } from './log';

export const handler = init;

export const builder = (_: any) => _
    .option('service', { alias: 's', default: 'branding' })
    .option('feature', { alias: 'f', default: 'product-management' })
    .option('description', { alias: 'd', default: 'ngrx example' });

async function init({
    description, dir,
    feature, service }: any) {

    const packageName = `@scci-${service}/${feature}`;
    const destination = `${process.cwd()}/${dir}`;
    const source = `${__dirname}/templates/ngrx-autonomous-component`;
    const replaceOptions = {
        files: [`${destination}/**/*`],
        ignore: [`${destination}/node_modules/**/*`],
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
    };
    showInfo('dir:', dir);
    showInfo('service:', service);
    showInfo('feature:', feature);
    showInfo('description:', description);

    assertNotEmpty(dir, 'dir is required');
    assertNotEmpty(service, 'service is required');
    assertNotEmpty(feature, 'feature is required');

    await copyDirectory(source, destination);
    await replaceValues(replaceOptions, packageName);
    await install(destination);
    await runNpm(destination, 'example:start:launch', 'opening app on browser');
}


