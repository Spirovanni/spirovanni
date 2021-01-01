import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../@core/services/api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card;
  rateHovered = 0;
  constructor(
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  rateHover(rate) {
    this.rateHovered = rate;
  }
  // tslint:disable-next-line:typedef
  rateClicked(rate) {
    this.apiService.rateCard(rate, this.card.id).subscribe(
      result => {
        console.log(result);
      },
      error => console.log(error)
    );
  }
}
