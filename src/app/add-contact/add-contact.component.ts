import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public addcontactForm:any

  titles: any = ["Operation Manager", "HR Manager",  "IT Specialist"]

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.addcontactForm = this.fb.group({
      FirstName: ['', [Validators.required,Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      MobilePhone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      OfficePhone: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      OfficeExt: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(4),Validators.maxLength(4)]],
      Fax: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      TollFree: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
      TollFreeExt: ['', [Validators.required, Validators.pattern('^[1-9][0-9]+$'),Validators.minLength(4),Validators.maxLength(4)]],
      Email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });
  }

  onSubmit(addcontactForm:any){

  }

  

  get FirstName() {
    return this.addcontactForm.get('FirstName');
  }

  get LastName() {
    return this.addcontactForm.get('FirstName');
  }

  get MobilePhone() {
    return this.addcontactForm.get('FirstName');
  }

  get OfficePhone() {
    return this.addcontactForm.get('FirstName');
  }

  get OfficeExt() {
    return this.addcontactForm.get('FirstName');
  }

  get Fax() {
    return this.addcontactForm.get('FirstName');
  }

  get TollFree() {
    return this.addcontactForm.get('FirstName');
  }

  get TollFreeExt() {
    return this.addcontactForm.get('FirstName');
  }

  get Email() {
    return this.addcontactForm.get('FirstName');
  }
}
