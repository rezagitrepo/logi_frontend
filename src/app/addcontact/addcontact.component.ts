import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  value = 'value'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  titles: any = ['Accountant','HR','Operation Manager']

}
