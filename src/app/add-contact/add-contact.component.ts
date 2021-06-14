import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
    contactModel: any = {
        "title": "",
        "first_name": "",
        "last_name": "",
        "mobile_phone": "",
        "office_phone": "",
        "office_ext": "",
        "fax": "",
        "toll_free": "",
        "toll_free_ext": "",
        "email": ""
    }
    currentUser: any;
    errorMessage: any;
    submitContactModel: any;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authServ.getCurrentUser().subscribe(
        (data) => {
            this.currentUser = data;
        },
        (error) => this.errorMessage = error
    )      
  }
  
    changeTitle(title:string) {
        this.contactModel.title = title;
    }

  submitNewContact(contactForm: any) {
    this.submitContactModel = {
        "title": this.contactModel.title,
        "first_name": this.contactModel.first_name,
        "last_name": this.contactModel.last_name,
        "mobile_phone": this.contactModel.mobile_phone,
        "office_phone": this.contactModel.office_phone,
        "office_ext": this.contactModel.office_ext,
        "fax": this.contactModel.fax,
        "toll_free": this.contactModel.toll_free,
        "toll_free_ext": this.contactModel.toll_free_ext,
        "email": this.contactModel.email
    }

    console.log(this.submitContactModel);

    this.currentUser.contacts.push(this.submitContactModel);


    this.authServ.updateUser(this.currentUser).subscribe(
        (data) => {
            this.currentUser = data;
            },
            (error) => this.errorMessage = error
    )

    // this.authServ.updateUser(updatedUser).subscribe(
    //     (data) => {
    //         this.currentUser = data;
    //     },
    //     (error) => this.errorMessage = error;
    // )

    


    this.router.navigate( ['main-section']);
  }

}
