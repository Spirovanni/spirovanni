import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';
import { Card } from '../../@core/models/Card';

@Component({
  selector: 'app-actions',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: any = [];
  selectedCard = null;
  constructor(
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.apiService.getCards().subscribe(
      data => {
        // @ts-ignore
        this.cards = data;
      },
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  selectCard(card) {
    this.selectedCard = card;
  }

}
