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

    this.authServ.submitRecoverPass(lostpass_credentials).subscribe(data => {
        console.log("data returned: " + data);
        
        if (data) this.router.navigate( ['resetpass']);
        else this.router.navigate( ['login']);
    });


  }

}
