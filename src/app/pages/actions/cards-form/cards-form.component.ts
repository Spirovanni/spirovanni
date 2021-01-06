import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import {ApiService} from '../../../@core/services/api.service';
import { Card } from '../../../@core/models/Card';


@Component({
  selector: 'app-card-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  @Input() card: Card;
  cardForm = new FormGroup({
  title: new FormControl(''),
  description: new FormControl('')
});
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }
  saveForm() {
    console.log(this.cardForm.value);
  }

}
