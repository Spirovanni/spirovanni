import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './@theme/utils/custom-overlay-container';

// import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { PipesModule } from './@theme/pipes/pipes.module';
import { AppRoutingModule } from './app.routing';

import { SharedModule } from './@core/shared/shared.module';
import { AuthModule } from './@auth/auth/auth.module';
import { CoreModule } from './@core/core/core.module';

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { ActionListComponent } from './@components/action-list/action-list.component';
import { PagesComponent } from './pages/pages.component';

// const routes: Routes = [
//   {path: '', pathMatch: 'full', redirectTo: 'actions'}
// ];

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
    // }),
    PerfectScrollbarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    AuthModule,
    CoreModule,
    PipesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ActionListComponent,
    PagesComponent
  ],
  exports: [
    // RouterModule
  ],
  providers: [
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
