import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import IUser from '../interfaces/IUser';
import { Login } from '../LoginModel';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string = "";
    password: string = "";
    login_credentials = new Login();
    users: any;
    errorMsg: any;
    retUrl: string | null="login";
    currentUser: any;

  constructor(private router: Router,
                private AuthServ: AuthService) {
   }

  ngOnInit(): void {
  }

  onFormSubmit(loginForm: any) {
        console.log(this.username);
        console.log(this.password);
        this.login_credentials.login_id = this.username;
        this.login_credentials.hashed_password = this.password;
        
        this.AuthServ.login(this.login_credentials).subscribe(data => {
            console.log("data returned: " + data);
            this.currentUser = data;

            console.log("CurrUser.email = " + this.currentUser.email);
            console.log("CurrUser.login_id = " + this.currentUser.login_id);
            console.log("CurrUser.contacts = " + this.currentUser.contacts);

            if (data) this.router.navigate( ['main-section']);
            else this.router.navigate( ['login']);
        });


  }

}
