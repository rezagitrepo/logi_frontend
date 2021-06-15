import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  private errorMessage: any;
  // prov_is_active: boolean = false;
  // prov_rate_signed: boolean = false;
  // prov_primary: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe(
      (data) => {
          this.currentUser = data;
          // this.prov_is_active = this.currentUser.provider[0].active;
          // this.prov_rate_signed = this.currentUser.provider[0].rate_signed;
          // this.prov_primary = this.currentUser.provider[0].primary;
      },
      (error) => this.errorMessage = error
  )
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
