import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppSettings} from '../../../app.settings';
import { ApiService } from '../../../@core/services/api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card;
  constructor(
    private apiService: ApiService,
    public appSettings: AppSettings,
  ) { }

  ngOnInit(): void {
  }

}
