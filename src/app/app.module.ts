import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './@auth/auth/auth.module';
import { CoreModule } from './@core/core/core.module';

import { AppComponent } from './app.component';
import { ActionListComponent } from './@components/action-list/action-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'actions'}
];

@NgModule({
  declarations: [
    AppComponent,
    ActionListComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
