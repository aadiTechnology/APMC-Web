import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: { UserName: string; Password: string };
  constructor(
    private commonService: CommonService,
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.user = {
      UserName: null,
      Password: null,
    };
  }

  ngOnInit(): void {}
  login(form: NgForm, user): any {
    this.ngxSpinnerService.show();
    if (form.valid) {
      this.commonService.login(user).subscribe(
        (arg) => {
          if (arg) {
            sessionStorage.setItem('AccessToken', arg.token);
            sessionStorage.setItem('Id', arg.id);
            sessionStorage.setItem('Role', arg.role);
            sessionStorage.setItem('FirstName', arg.firstName);
            sessionStorage.setItem('LastName', arg.lastName);
            sessionStorage.setItem('Mobile', arg.mobileNo);
            sessionStorage.setItem('Email', arg.email);
            sessionStorage.setItem('CurrentUser', JSON.stringify(arg));
            if (arg.role === 'Merchant') {
              this.router.navigate(['/merchant']);
            }
            this.ngxSpinnerService.hide();
          }
        },
        (err) => {
          this.ngxSpinnerService.hide();
        }
      );
    } else {
      this.ngxSpinnerService.hide();
    }
  }
}
