import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card;
  rateHovered = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  rateHover(rate) {
    this.rateHovered = rate;
  }
  rateClicked(rate) {
    this.rateHovered = rate;
  }
}
