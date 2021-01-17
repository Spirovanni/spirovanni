import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';
import { Card } from '../../@core/models/Card';

@Component({
  selector: 'app-actions',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  selectedCard = null;
  editedCard = null;

  constructor(
    private apiService: ApiService
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.apiService.getCards().subscribe(
      (data: Card[]) => {
        // @ts-ignore
        this.cards = data;
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  selectCard(card: Card) {
    this.selectedCard = card;
    this.editedCard = null;
    // console.log('selectedCard', this.selectedCard);
  }

  // tslint:disable-next-line:typedef
  editCard(card: Card) {
    this.editedCard = card;
    this.selectedCard = null;
  }

  // tslint:disable-next-line:typedef
  createNewCard() {
    this.editedCard = {title: '', description: ''};
    this.selectedCard = null;
  }

  // tslint:disable-next-line:typedef
  deletedCard(card: Card) {
    this.apiService.deleteCard(card.id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
