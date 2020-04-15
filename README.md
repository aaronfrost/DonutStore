# DonutStore

An Angular app that uses the [DonutAPI](git@github.com:aaronfrost/DonutAPI.git) to show and teach about
building Jamstack apps in with Angular.

## Step3

If you launch your Scully app in the browser, you will notice that it is still making calls to
the DonutAPI after the Scully build has happened. Wouldn't it be cool if we could cache the calls
to the API so that in production these calls would be immediately available and deployed to the
CDN. This means that the user wouldn't need to travel clear back to our server to get that data
again, as it would be deployed with the HTML, CSS and JS out on the CDN.

To do this, we will use Scully's `TransferStateService`.
Let's get started.

#### Update `donuts.component.ts`

In your `donuts.component.ts`, you should inject the `TransferStateService`.

```typescript
constructor(private tss: TranferStateService){...}
```

Once you done this, you can use the `tss` service to fetch data from the server BEFORE we build
with Scully, but use cached versions of the same data AFTER we build with Scully. To do this, it is
very easy. We are going to use the `tss.useScullyTransferState()` method. This method signature looks
like:

```typscript
function useScullyTransferState<T>(key: string, dataSource: Observable<T>) Observable<T> {}
```

This means that when you call it you will pass it two parameters. The first is a name for the key in
the cache. The second is an observable that will return the data from the server when your in dev mode.

In `donuts.component.ts` modify the code in the constructor to look like the following:

```typescript
let donuts$ = this.transferState.useScullyTransferState(
    'donuts',
    this.http.get<any[]>(`${environment.API.BASE_URL}/donuts`),
);

donuts$.subscribe(res => {
    this.donuts = res;
});
```

And it's that simple. You simply pass it the name of the key you want to use in the transfer state cache,
as well as dataSrc observable that will return the correct data during dev and scully mode.

#### Now let's do the same for `donut.component.ts`

Update the constructor in your `donut.component.ts` to look like this:

```typescript
constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService,
) {
    let donut$ = transferState.useScullyTransferState(
        'donut',
        this.route.parent.params.pipe(
            pluck('donutId'),
            switchMap(id => this.http.get<any>(`${environment.API.BASE_URL}/donuts/${id}`)),
        ),
    );

    donut$.subscribe(res => {
        this.donut = res;
    });
}
```

At this point, you run an Angular build, then a Scully build, then a Scully serve and you can see
that your app no longer is making requests to the server for data once it's pre-rendered. This
is like Angular on steriods!!!

## Now what?

To move on, stash your changes and checkout the `step4` branch.

```bash
git stash //hides your changes you just made
git checkout step4
```
