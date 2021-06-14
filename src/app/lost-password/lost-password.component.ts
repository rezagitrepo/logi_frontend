import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
    username: string ="";
    email: string="";

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:any) {
    let lostpass_credentials = {
        "login_id": this.username,
        "email": this.email
    }

    this.authServ.submitRecoverPass(lostpass_credentials).subscribe(
        (data) => {
            console.log("data returned: " + data);
            
            alert("Email with password reset instructions sent!");
            this.router.navigate( ['login']);
        },
        (error) => {
            alert("Email does not exist with LOGI.");
            this.router.navigate( ['lostpass']);
        }
    );


  }

}
