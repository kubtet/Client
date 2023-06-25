import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  books: any;
  registerMode = false;

  constructor(public accountService: AccountService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
    this.getBooks();
    console.log(this.books);
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  getBooks() {
    this.http.get('https://localhost:5001/api/books').subscribe({
      next: response => this.books = response,
      error: error => console.log(error)
    })
  }

  modeToggler(event: boolean) {
    this.registerMode = event;
  }

}
