import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineAll } from 'rxjs/operators';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { CanActivateClassGuardGuard } from './can-activate-class-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'main-section', component: MainSectionComponent,canActivate: [CanActivateClassGuardGuard]},
  { path: 'mainpage', component: MainpageComponent,canActivate: [CanActivateClassGuardGuard]},
  { path: 'contact', component: ContactComponent,canActivate: [CanActivateClassGuardGuard]},
    {path: 'addcontact', component: AddContactComponent,canActivate: [CanActivateClassGuardGuard]},
    {path: 'addnote', component: AddnoteComponent,canActivate: [CanActivateClassGuardGuard]},
    {path: 'lostpass', component: LostPasswordComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
