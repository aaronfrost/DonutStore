import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutsRoutingModule } from './donuts-routing.module';
import { DonutsComponent } from './donuts.component';

@NgModule({
    declarations: [DonutsComponent],
    imports: [CommonModule, DonutsRoutingModule],
})
export class DonutsModule {}
