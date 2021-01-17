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
        this.cards = this.cards.filter(car => car.id !== card.id);
      },
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  cardCreated(card: Card) {
    this.cards.push(card);
    this.editedCard = null;
  }
  // tslint:disable-next-line:typedef
  cardUpdated(card: Card) {
    const indx = this.cards.findIndex( car => car.id === card.id );
    if (indx >= 0) {
      this.cards[indx] = card;
    }
    this.editedCard = null;
  }
}
