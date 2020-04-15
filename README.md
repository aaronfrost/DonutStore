# DonutStore

An Angular app that uses the [DonutAPI](git@github.com:aaronfrost/DonutAPI.git) to show and teach about
building Jamstack apps in with Angular.

## Step2

In this branch we will teach Scully how to find all of the different Donut IDs so that it can
pre-render our `/donuts/:donutId` route.

In order to do this we will need to build a `route plugin`, which is the kind of plugin we can
build to help show Scully how to find all of the routes in our app (including, and especially,
parameterized routes).

To do this open your `scully.DonutStore.config.js` and add the following config in the routes section:

```bash

exports.config = {
    ...
    routes: {
        '/donuts/:donutId': {
            type: 'json',
            donudId: {
                url: 'http://localhost:3000/donuts',
                property: 'id'
            }
        }
    }
}
```

Once you've added this, you can run the scully build again:

```bash
npm run scully
```

You should see that all of your donut pages will now visited and pre-rendered.

IMPORTANT: It is important that you have the DonutAPI project running locally on your machine for
this demo!

## Now what?

To move on, stash your changes and checkout the `step3` branch.

```bash
git stash //hides your changes you just made
git checkout step3
```
