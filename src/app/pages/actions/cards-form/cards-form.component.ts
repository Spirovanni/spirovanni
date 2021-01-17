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
  id = null;
  @Input() set card(val: Card) {
    this.id = val.id;
    console.log(this.id);
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
    if (this.id) {
      this.apiService.updateCard(this.id,
        this.cardForm.value.title, this.cardForm.value.description).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    } else {
      this.apiService.createCard(
        this.cardForm.value.title, this.cardForm.value.description).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    }

  }

}
