import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

function myDonutsIdPlugin(unhandledRoute) {
    return httpGetJson('http://localhost:3000/donuts').then(donuts => {
        return donuts.map(donut => ({ route: `/donuts/${donut.id}` }));
    });
}

registerPlugin('router', 'myDonutsIdPlugin', myDonutsIdPlugin);

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'DonutStore',
    outDir: './dist/static',
    defaultPostRenderers: [criticalCSS],
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './blog',
            },
        },
        '/donuts/:donutId': {
            type: 'myDonutsIdPlugin',
        },
    },
};
