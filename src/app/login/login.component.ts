import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IUser, IContact, INote, IProvider } from '../interfaces/IUser';
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
        
        this.AuthServ.login(this.login_credentials).subscribe(
        (data) => {
            console.log("data returned: " + data);
            this.currentUser = data;

            //store stuff here
            sessionStorage.setItem('login_id', this.currentUser.login_id);
            sessionStorage.setItem('providerName', this.currentUser.provider[0].name);
            sessionStorage.setItem('providerAdd1', this.currentUser.provider[0].address_line1);
            sessionStorage.setItem('providerAdd2', this.currentUser.provider[0].address_line2);
            sessionStorage.setItem('providerAdd3', this.currentUser.provider[0].address_line3);
            sessionStorage.setItem('providerCountry', this.currentUser.provider[0].country);
            sessionStorage.setItem('providerCity', this.currentUser.provider[0].city);
            sessionStorage.setItem('providerState', this.currentUser.provider[0].state);
            sessionStorage.setItem('providerZipcode', this.currentUser.provider[0].zip_code);
            sessionStorage.setItem('providerPhone', this.currentUser.provider[0].phone);
            sessionStorage.setItem('providerPhoneExt', this.currentUser.provider[0].phone_ext);
            sessionStorage.setItem('providerFax', this.currentUser.provider[0].fax);
            sessionStorage.setItem('providerTollFree', this.currentUser.provider[0].toll_free);
            sessionStorage.setItem('providerEmail', this.currentUser.provider[0].email);
            sessionStorage.setItem('providerPrimaryContact', this.currentUser.provider[0].primary_contact);
            sessionStorage.setItem('providerTimeZone', this.currentUser.provider[0].time_zone);
            sessionStorage.setItem('providerHourStart', this.currentUser.provider[0].hour_start);
            sessionStorage.setItem('providerHourEnd', this.currentUser.provider[0].hour_end);
            sessionStorage.setItem('providerActive', this.currentUser.provider[0].active);
            sessionStorage.setItem('providerRateSigned', this.currentUser.provider[0].rate_signed);
            sessionStorage.setItem('providerPrimary', this.currentUser.provider[0].primary);

            sessionStorage.setItem("contacts", JSON.stringify(this.currentUser.contacts));
            //console.log("stored contacts: " + sessionStorage.getItem('contacts'));

            sessionStorage.setItem("notes", JSON.stringify(this.currentUser.notes));

            // console.log("stored session login_id = " + sessionStorage.getItem('login_id'));
            // console.log("stored session providerName = " + sessionStorage.getItem('providerName'));





            console.log("CurrUser.email = " + this.currentUser.email);
            console.log("CurrUser.login_id = " + this.currentUser.login_id);
            console.log("CurrUser.contacts = " + this.currentUser.contacts);

           this.router.navigate( ['main-section']);
           
        },
        (error) => {
            alert("Incorrect login credentials!");
            this.router.navigate( ['login']);
        }
    
        );


  }

}
