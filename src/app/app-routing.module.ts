import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineAll } from 'rxjs/operators';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'main-section', component: MainSectionComponent},
  { path: 'mainpage', component: MainpageComponent},
  { path: 'contact', component: ContactComponent},
    {path: 'addcontact', component: AddContactComponent},
    {path: 'addnote', component: AddnoteComponent },
    {path: 'lostpass', component: LostPasswordComponent },
    {path: 'resetpass', component: ResetPassComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
