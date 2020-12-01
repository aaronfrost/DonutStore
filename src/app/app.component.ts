import { Component } from '@angular/core';
import { isScullyRunning, isScullyGenerated } from '@scullyio/ng-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'DonutStore';

    showLogo = !isScullyRunning();
}
