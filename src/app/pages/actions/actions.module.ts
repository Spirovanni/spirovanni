import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TablesService } from './../tables/tables.service';
import { SharedModule } from '../../@core/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ActionsComponent } from './actions.component';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { ActionDetailsComponent } from './action-details/action-details.component';


export const routes = [
  { path: '', component: ActionsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ActionsComponent,
    ActionListComponent,
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
export class ActionsModule { }
