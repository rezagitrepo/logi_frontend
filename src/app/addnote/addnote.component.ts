import { Component, OnInit } from '@angular/core';
import NoteModel from '../interfaces/NoteModel';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import UserModel from '../interfaces/UserModel';


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
    console.log("current timestamp type: " + typeof(this.currentTimeStamp));
    console.log("current formbody type: " + typeof(this.formbody));

    this.noteModel = {
        "time_stamp": this.currentTimeStamp,
        "body": this.formbody
    }

    console.log(this.noteModel);

    console.log("currentNoteList before adding: " + this.currentNoteList); 
    // let noteListToChange = JSON.parse(this.currentNoteList);
    //     noteListToChange +=("," + this.noteModel);
    
    // let changedList = JSON.stringify(noteListToChange);

    console.log(this.currentNoteList[0]);
    this.currentUser.notes.push(this.noteModel);
    console.log(this.currentNoteList[1]);
    //console.log(this.currentNoteList[2]);
    console.log("Notes after adding: " + this.currentUser.notes);
    console.log(this.currentUser.notes[2]);

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
