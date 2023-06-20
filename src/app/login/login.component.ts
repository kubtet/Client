import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  @Output() toRegister = new EventEmitter();

  constructor(public accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response)
      },
      error: error => {
        this.toastr.error(error.error),
        console.log(error)
      }
    })
  }

  register() {
    this.toRegister.emit(true);
  }

}
