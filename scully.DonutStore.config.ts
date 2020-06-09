export const config = {
    projectRoot: './src',
    projectName: 'DonutStore',
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
        type: 'contentFolder',
        slug: {
            folder: "./blog"
        }
        },
        '/donuts/:donutId': {
            type: 'json',
            donutId: {
                url: 'http://localhost:3000/donuts',
                property: 'id',
            },
        },
    },
};
