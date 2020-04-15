import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonutsComponent } from './donuts.component';

const routes: Routes = [{ path: '', component: DonutsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DonutsRoutingModule {}
