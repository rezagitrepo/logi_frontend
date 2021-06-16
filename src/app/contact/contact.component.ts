import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contacts: any;
    errorMessage: any;
    currUser: any;
    storedContacts: any;

  value = 'value'
  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {
        // if (sessionStorage.getItem('login_id') !== null) {

        // }

      this.authServ.getCurrentUser().subscribe(
          (data) => {
                this.currUser = data;
                
                this.contacts = this.currUser.contacts;
          },
          (error) => {
              this.errorMessage = error;
          }
 
      )
  }

}
