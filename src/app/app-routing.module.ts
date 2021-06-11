import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'main-section', component: MainSectionComponent},
  { path: 'mainpage', component: MainpageComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'addcontact', component: AddcontactComponent},
  { path: 'addnote', component: AddnoteComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
