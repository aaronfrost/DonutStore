import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutRoutingModule } from './donut-routing.module';
import { DonutComponent } from './donut.component';

@NgModule({
    declarations: [DonutComponent],
    imports: [CommonModule, DonutRoutingModule],
})
export class DonutModule {}
