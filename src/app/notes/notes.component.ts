import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    currUser: any;
    notes: any;
    errorMessage: any;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
        this.authServ.getCurrentUser().subscribe(
            (data) => {
                this.currUser = data;
                this.notes = this.currUser.notes;
            },
            (error) => {
                this.notes = sessionStorage.getItem('notes');
                this.errorMessage = error;
            } 
        )
    }

}
