import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';
import { Router } from '@angular/router';
import { Card } from '../../@core/models/Card';
import { CookieService } from 'ngx-cookie-service';

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
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const crToken = this.cookieService.get('cr-token');
    if (!crToken) {
      this.router.navigate(['/login']);
    } else {
      this.apiService.getCards().subscribe(
        (data: Card[]) => {
          // @ts-ignore
          this.cards = data;
        },
        error => console.log(error)
      );
    }
  }

  selectCard(card: Card) {
    this.selectedCard = card;
    this.editedCard = null;
    // console.log('selectedCard', this.selectedCard);
  }

  editCard(card: Card) {
    this.editedCard = card;
    this.selectedCard = null;
  }
  createNewCard() {
    this.editedCard = {title: '', description: ''};
    this.selectedCard = null;
  }
  deletedCard(card: Card) {
    this.apiService.deleteCard(card.id).subscribe(
      data => {
        this.cards = this.cards.filter(car => car.id !== card.id);
      },
      error => console.log(error)
    );
  }

  cardCreated(card: Card) {
    this.cards.push(card);
    this.editedCard = null;
  }

  cardUpdated(card: Card) {
    const indx = this.cards.findIndex( car => car.id === card.id );
    if (indx >= 0) {
      this.cards[indx] = card;
    }
    this.editedCard = null;
  }
}
