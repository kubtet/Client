import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() toLogin = new EventEmitter();

  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.login()
      },
      error: error => console.log(error)
    })
  }

  login() {
    this.toLogin.emit(false);
  }

}
