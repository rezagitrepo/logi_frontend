import { Component, OnInit } from '@angular/core';
import NoteModel from '../interfaces/NoteModel';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {
    currentUser: any;
    errorMessage: any;
    currentNoteList: any;
    noteModel: any;
    currentTimeStamp: any;
    formbody: string = "";

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authServ.getCurrentUser().subscribe(
        (data) => {
            this.currentUser = data
            this.currentNoteList = this.currentUser.notes;
        },
        (error) => this.errorMessage = error
    )
  }

  submitNewNote(newNote: any) {
    console.log("form body: " + newNote.body);

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.currentTimeStamp = date+' '+time;

    this.noteModel = new NoteModel(this.currentTimeStamp, this.formbody);
    console.log(this.noteModel);

    console.log("currentNoteList before adding: " + this.currentNoteList); 
    this.currentNoteList += newNote;
    console.log("currentNoteList after adding: " + this.currentNoteList);

    this.currentUser.notes = this.currentNoteList;

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
