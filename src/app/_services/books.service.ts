import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../_models/Book';
import { BookDetails } from '../_models/BookDetails';
import { BookCreate } from '../_models/BookCreate';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl + 'books');
  }

  getBook(id: number) {
    return this.http.get<BookDetails>(this.baseUrl + 'books/' + id);
  }

  getBookByTitle(title: string) {
    return this.http.get<Book>(this.baseUrl + 'books/getbytitle/' + title);
  }

  create(book: BookCreate) {
    return this.http.post<BookCreate>(this.baseUrl + 'books', book);
  }
}
