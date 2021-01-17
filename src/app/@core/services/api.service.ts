import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Card} from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  baseCardUrl = `${this.baseUrl}api/cards/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 069bbc38f30919f10c0635ac26d795db437bd4ad'
  });
  constructor(
    private httpClient: HttpClient
  ) { }
  getCards() {
    return this.httpClient.get<Card[]>(this.baseCardUrl, {headers: this.headers});
  }
  getCard(id: number) {
    return this.httpClient.get<Card>(`${this.baseCardUrl}${id}/`, {headers: this.headers});
  }
  createCard(title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseCardUrl}`, body, {headers: this.headers});
  }
  updateCard(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseCardUrl}${id}/`, body, {headers: this.headers});
  }
  deleteCard(id: number) {
    return this.httpClient.delete(`${this.baseCardUrl}${id}/`, {headers: this.headers});
  }
  rateCard(rate: number, cardId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseCardUrl}${cardId}/rate_card/`, body, {headers: this.headers});
  }
  loginUser(authData) {
    const body = JSON.stringify({authData});
    return this.httpClient.put(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }
}
