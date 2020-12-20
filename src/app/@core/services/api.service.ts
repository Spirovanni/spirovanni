import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/api/cards/';
  private cards = ['Mercy Card', 'Happy Card'];

  constructor(
    private httpClient: HttpClient
  ) { }
  // tslint:disable-next-line:typedef
  getCards() {
    const dynamicCards = this.httpClient.get(this.baseUrl);
    console.log(dynamicCards);
    return this.cards;
  }
}
