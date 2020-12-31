import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppSettings} from '../../../app.settings';
import { ApiService } from '../../../@core/services/api.service';
import { Card } from '../../../@core/models/Card';
import { faStar } from '@fortawesome/fontawesome-free';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card: Card;
  @Output() updateCard = new EventEmitter<Card>();
  rateHovered = 0;
  faStar = faStar;
  constructor(
    private apiService: ApiService,
    public appSettings: AppSettings,
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  rateHover(rate: number) {
    this.rateHovered = rate;
  }
  // tslint:disable-next-line:typedef
  // rateClicked(rate: number) {
  //   this.apiService.rateCard(rate, this.card.id).subscribe(
  //     result => this.getDetails(),
  //     error => console.log(error)
  //   );
  // }
  // tslint:disable-next-line:typedef
  getDetails() {
    this.apiService.getCard().subscribe(
      (card: Card) => {
        this.updateCard.emit(card);
      },
      error => console.log(error)
    );
  }


}
