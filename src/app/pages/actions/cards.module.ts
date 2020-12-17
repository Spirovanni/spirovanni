import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TablesService } from '../tables/tables.service';
import { SharedModule } from '../../@core/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CardsComponent } from './cards.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { ActionFormComponent } from './cards-form/action-form.component';
import { ActionDetailsComponent } from './cards-details/action-details.component';


export const routes = [
  { path: '', component: CardsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CardsComponent,
    CardsListComponent,
    ActionFormComponent,
    ActionDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    SharedModule,
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule
  ],
  providers: [
    TablesService
  ]
})
export class CardsModule { }
