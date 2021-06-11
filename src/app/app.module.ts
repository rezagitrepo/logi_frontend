import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    ContactComponent,
    NavbarComponent,
    MainSectionComponent,
    AddnoteComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
