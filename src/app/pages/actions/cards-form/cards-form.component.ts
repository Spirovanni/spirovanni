import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../../@core/services/api.service';
import { Card } from '../../../@core/models/Card';


@Component({
  selector: 'app-card-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  cardForm;
  @Input() set card(val: Card) {
    this.cardForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    });
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  saveForm() {
    console.log(this.cardForm.value);
    this.apiService.createCard(
      this.cardForm.value.title, this.cardForm.value.description).subscribe(
        result => console.log(result),
      error => console.log(error)
    );
  }

}
