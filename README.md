# DonutStore

An Angular app that uses the [DonutAPI](git@github.com:aaronfrost/DonutAPI.git) to show and teach about
building Jamstack apps in with Angular.

## Step1

In this branch we will install Scully to this project.

Run the following to add Scully to this project:

```bash
ng add @scullyio/init
```

At this point, read the changelog in the terminal to see what was changed about your app.

Noteworthy changes:

-   `app.module` - Imported the `ScullyLibModule`.
-   `polyfils.ts` - Updated to add some zone.js functionality.
-   `sculy.DonutStore.config.js` - Your new scully config file has been created.

## How to Verify

Great! So we have installed Scully, but now what do we do? Well, we need to verify that it successfully
installed Scully and that our project is able to be pre-rendered with Scully. To do this, run the
following steps from your terminal:

-   `ng build` - You need to run a build. Scully requires it prior to pre-rendering.
-   `npm run scully` - Now run Scully!

When that runs, notice that it generates our `/about` and `/` routes. But it shows you a warning
about your route `/donuts/:donutId`. In the next step we will address that warning.

But you can now check the contents of your `/dist/static` directory and see that your `/index.html`
`/about/index.html` pages were both pre-rendered to HTML and CSS.

Also notice that the scully build created a `scully-routes.json` file with a list of all the routes in
your app. This file will come in handy later.

## Now what?

To move on, stash your changes and checkout the `step2` branch.

```bash
git stash //hides your changes you just made
git checkout step2
```
