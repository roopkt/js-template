
import { assertNotEmpty, copyDirectory, install, replaceValues } from './utility';
import { showInfo } from './log';

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
    linkservice }: any,
) {
    const packageName = `@scci-${service}/${app}`;
    const destination = `${process.cwd()}/${dir}`;
    const source = `${__dirname}/templates/ngrx-composite-app`;

    const replaceOptions = {
        files: [`${destination}/**/*`],
        ignore: [`${destination}/node_modules/**/*`],
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
    };

    showInfo('dir:', dir);
    showInfo('service:', service);
    showInfo('app:', app);
    showInfo('description:', description);

    assertNotEmpty(dir, 'dir is required');
    assertNotEmpty(service, 'service is required');
    assertNotEmpty(app, 'app name is required');

    await copyDirectory(source, destination);
    await replaceValues(replaceOptions, packageName);
    await install(destination);
}
