import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
    currentUser: any;
    errorMessage: any;
    pass1: string = "";
    pass2: string = "";

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authServ.getCurrentUser().subscribe(
        (data) => {
            this.currentUser = data;
        },
        (error) => this.errorMessage = error
    )      
  }

  onFormSubmit(resetPassForm: any) {
    if (this.pass1 === this.pass2) {
        this.authServ.resetPass(this.currentUser, this.pass1).subscribe(data => {
            console.log("data returned: " + data);
            
            if (data) this.router.navigate( ['login']);
            else this.router.navigate( ['resetpass']);
        });


    }
    else {
        alert('Passwords must match to continue!');
        this.router.navigate(['reset-pass']);
    }
  }

}
