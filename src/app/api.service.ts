
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.model';
import { CharacterResponse } from './character.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private baseUrl = 'https://the-one-api.dev/v2'; 
  private apiKey = '5tfrhW-w11zelFEtvzWa';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`  
    });
  }


 getCharacters(): Observable<CharacterResponse> {
  return this.http.get<CharacterResponse>(`${this.baseUrl}/character?sort=name:asc`, { headers: this.getHeaders() })
}


getPostById(id: number): Observable<Character> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`, { headers: this.getHeaders() })
}

}

