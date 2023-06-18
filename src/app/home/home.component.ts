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
  registerMode = false;

  constructor(public accountService: AccountService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  modeToggler(event: boolean) {
    this.registerMode = event;
  }

}
