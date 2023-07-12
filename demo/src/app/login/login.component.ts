import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@models/login.model';
import { ApiService } from '../@services/api.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorhandleService } from '../@services/errorhandle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private errorHandler: ErrorhandleService,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.apiService.httpGet('/user').subscribe((data: any )=>{
      console.log(data);
      //this.router.navigateByUrl('/manage/home');
    });
  }

  loginValue: LoginPost = {
    AccountName: '',
    Password: ''
  }

  
  login() {

    console.log(this.loginValue.AccountName+" | "+this.loginValue.Password);

    this.apiService.httpPost("/user", {
       username : this.loginValue.AccountName,
       password : this.loginValue.Password}
    ).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    },(error: HttpErrorResponse)=>{
      this.errorHandler.handleError(error);
    });
    
    this.router.navigateByUrl('/manage/home');
  }

}
