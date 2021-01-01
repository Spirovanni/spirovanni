import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../@core/services/api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card;
  @Output() updateCard = new EventEmitter();
  rateHovered = 0;
  constructor(
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  rateHover(rate: number) {
    this.rateHovered = rate;
  }
  // tslint:disable-next-line:typedef
  rateClicked(rate: number) {
    this.apiService.rateCard(rate, this.card.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  getDetails() {
    this.apiService.getCard(this.card.id).subscribe(
      card => {
        this.updateCard.emit(card);
      },
      error => console.log(error)
    );
  }
}
