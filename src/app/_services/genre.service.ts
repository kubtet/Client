import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genre } from '../_models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllGenres() {
    return this.http.get<Genre[]>(this.baseUrl + "genre");
  }
  
  getById(id: number) {
    return this.http.get<Genre>(this.baseUrl + 'genre/' + id);
  }

  create(genre: Genre) {
    return this.http.post<Genre>(this.baseUrl + "genre", genre);
  }
}