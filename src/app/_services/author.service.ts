import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author } from '../_models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Author[]>(this.baseUrl + 'author');
  }

  getById(id: number) {
    return this.http.get<Author>(this.baseUrl + 'author/' + id);
  }

  create(author: Author) {
    return this.http.post<Author>(this.baseUrl + 'author', author);
  }
}
