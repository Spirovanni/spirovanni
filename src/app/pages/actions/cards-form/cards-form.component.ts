import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() cardCreated = new EventEmitter<Card>();
  @Output() cardUpdated = new EventEmitter<Card>();
  @Input() set card(val: Card) {
    this.id = val.id;
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
        (result: Card) => this.cardUpdated.emit(result),
        error => console.log(error)
      );
    } else {
      this.apiService.createCard(
        this.cardForm.value.title, this.cardForm.value.description).subscribe(
        (result: Card) => this.cardCreated.emit(result),
        error => console.log(error)
      );
    }

  }

}
