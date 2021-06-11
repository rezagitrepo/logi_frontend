import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
    currentUser: any;
    errorMessage: any;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.authServ.getCurrentUser().subscribe(
        (data) => this.currentUser = data,
        (error) => this.errorMessage = error
    )      
  }

}
