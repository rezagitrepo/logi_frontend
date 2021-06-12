import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
    contactModel: any;
    currentUser: any;
    errorMessage: any;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.authServ.getCurrentUser().subscribe(
        (data) => {
            this.currentUser = data;
        },
        (error) => this.errorMessage = error
    )      
  }

}
