import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cards = ['Mercy Card', 'Happy Card'];

  constructor() { }
  // tslint:disable-next-line:typedef
  getCards() {
    return this.cards;
  }
}
