import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
