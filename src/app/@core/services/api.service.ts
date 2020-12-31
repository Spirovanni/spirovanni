import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/api/cards/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 069bbc38f30919f10c0635ac26d795db437bd4ad'
  });
  constructor(
    private httpClient: HttpClient
  ) { }
  // tslint:disable-next-line:typedef
  getCards() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
  // tslint:disable-next-line:typedef
  getCard() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
