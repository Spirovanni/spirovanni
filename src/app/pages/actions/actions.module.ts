import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
    SharedModule,
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule
  ]
})
export class ActionsModule { }
