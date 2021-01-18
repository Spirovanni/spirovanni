import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Card} from '../models/Card';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  baseCardUrl = `${this.baseUrl}api/cards/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }
  getCards() {
    return this.httpClient.get<Card[]>(this.baseCardUrl, {headers: this.getAuthHeaders()});
  }
  getCard(id: number) {
    return this.httpClient.get<Card>(`${this.baseCardUrl}${id}/`, {headers: this.getAuthHeaders()});
  }
  createCard(title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseCardUrl}`, body, {headers: this.getAuthHeaders()});
  }
  updateCard(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseCardUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }
  deleteCard(id: number) {
    return this.httpClient.delete(`${this.baseCardUrl}${id}/`, {headers: this.getAuthHeaders()});
  }
  rateCard(rate: number, cardId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseCardUrl}${cardId}/rate_card/`, body, {headers: this.getAuthHeaders()});
  }
  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.getAuthHeaders()});
  }
  registerUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/users/`, body, {headers: this.getAuthHeaders()});
  }
  getAuthHeaders() {
    const token = this.cookieService.get('cr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
}
