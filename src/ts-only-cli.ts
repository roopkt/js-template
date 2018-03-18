import { assertNotEmpty, copyDirectory, runNpm, replaceValues, install } from './utility';
import { showInfo } from './log';

export const handler = init;

export const builder = (_: any) => _
    .option('service', { alias: 's', default: 'branding' })
    .option('feature', { alias: 'f', default: 'assertion-concerns' })
    .option('description', { alias: 'd', default: 'ts only example app' });

async function init({
    description, dir,
    feature, service }: any) {

    const packageName = `@scci-${service}/${feature}`;
    const destination = `${process.cwd()}/${dir}`;
    const source = `${__dirname}/templates/autonomous-component`;
    const replaceOptions = {
        files: [`${destination}/**/*`],
        ignore: [`${destination}/node_modules/**/*`],
        from: [
            /@scci-servicename\/featurename/g,
            'feature description',
            'servicename',
        ],
        to: [
            `${packageName}`,
            `${description}`,
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
    await runNpm(destination, 'test:watch', 'running test in watch mode');
}


