import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './@theme/utils/custom-overlay-container';

// import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './@auth/auth/auth.module';
import { CoreModule } from './@core/core/core.module';

import { AppComponent } from './app.component';
import { ActionListComponent } from './@components/action-list/action-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'actions'}
];

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
    // }),
    PerfectScrollbarModule,
    AuthModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ActionListComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
