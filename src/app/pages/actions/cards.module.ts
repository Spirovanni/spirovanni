import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../@core/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CardsComponent } from './cards.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { CardDetailsComponent } from './card-details/card-details.component';

import { TablesService } from '../tables/tables.service';
import { ApiService } from '../../@core/services/api.service';
import {NgxFontAwesomeModule} from 'ngx-font-awesome';

export const routes = [
  { path: '', component: CardsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CardsComponent,
    CardsListComponent,
    CardsFormComponent,
    CardDetailsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxDatatableModule,
        SharedModule,
        FormsModule,
        NgxChartsModule,
        PerfectScrollbarModule,
        NgxFontAwesomeModule
    ],
  providers: [
    TablesService,
    ApiService
  ]
})
export class CardsModule { }
