import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { LoginComponent } from './login/login.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'mainpage', component: MainpageComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'add-contact', component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
