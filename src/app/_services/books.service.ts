import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../_models/Book';
import { BookDetails } from '../_models/BookDetails';
import { BookCreate } from '../_models/BookCreate';
import { AccountService } from './account.service';
import { User } from '../_models/User';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = environment.apiUrl;
  token: string | undefined;

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        this.token = user?.token
      }
    })
  }

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
    return this.http.post<BookDetails>(this.baseUrl + 'books', book);
  }

  like(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.put(this.baseUrl + 'books/' + id + '/like', null, { headers: headers });
  }

  getLiked() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get<Book[]>(this.baseUrl + 'books/likedbooks', { headers: headers });
  }

  addToRead(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.put(this.baseUrl + 'books/' + id + '/toread', null, { headers: headers });
  }

  getBooksToRead() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get<Book[]>(this.baseUrl + 'books/toread', { headers: headers });
  }

  delete() {
    console.log("deleted");
    return 0;
  }
}