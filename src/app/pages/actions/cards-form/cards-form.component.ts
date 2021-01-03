import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../../@core/services/api.service';
import { Card } from '../../../@core/models/Card';

@Component({
  selector: 'app-card-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  @Input() card: Card;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
