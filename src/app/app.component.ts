import { Component } from '@angular/core';
import {
  trigger, state, style, animate, transition,
  // ...
} from '@angular/animations';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger, state, style, animate, transition,
    // animation triggers go here
  ]
})
export class AppComponent {
  public settings: Settings;
  constructor(public appSettings: AppSettings){
    this.settings = this.appSettings.settings;
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() { }
}
