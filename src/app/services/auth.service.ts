import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../LoginModel';
import UserModel from '../UserModel';
import { IUser, IContact, INote, IProvider } from '../interfaces/IUser';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private storedUser: any;
  private baseUrl:string = "http://localhost:3000/api/users";
  private loginUrl:string = "http://localhost:3000/api/users/login";
  private lostpassUrl: string = "http://localhost:3000/api/users/lostpass";
  private currUser: any;
  private errorMessage: any;
  private isloggedIn: boolean = false;
  private userName:string | undefined;
  private pass: string | undefined;
  //private id = JSON.parse(localStorage.getItem('id') || '');

  constructor(private http: HttpClient) {
  }

  submitRecoverPass(lostpass_credentials: any): Observable<IUser[]> {
      let dataToSend = lostpass_credentials;
      this.currUser = this.http.post(this.lostpassUrl, dataToSend)
      .pipe(catchError(this.errorHandler));
      return this.currUser;
  }

  login(login_cred: Login): Observable<IUser[]> {
      let dataToSend = login_cred;
      this.userName = login_cred.login_id;
      this.pass = login_cred.hashed_password;
    //   console.log("request sent from Angular: " + JSON.stringify(dataToSend));
        this.currUser = this.http.post<IUser[]>(this.loginUrl, dataToSend)
        .pipe(catchError(this.errorHandler));
        console.log(this.currUser);
        if(this.currUser!==null) {
            this.isloggedIn = true;
            //this.id = localStorage.setItem('id', this.currUser._id);
            //this.isloggedIn = localStorage.setItem('isloggedIn','true');
        }
        console.log("this.isloggedIn: " + this.isloggedIn);

        

    //submit login post request
    return this.currUser;

    //   this.isloggedIn=true;
    //   this.userName=username;
    //   return of(this.isloggedIn);
  }

  getCurrentUser(): Observable<IUser[]> {
//     let dataToSend = {
//         login_id: this.userName,
//         hashed_password: this.pass
//     }
//   //   console.log("request sent from Angular: " + JSON.stringify(dataToSend));
//       this.currUser = this.http.get<IUser[]>("http://localhost:3000/api/users/" + this.id)
//       .pipe(catchError(this.errorHandler));
//       console.log(this.currUser);
//       if(this.currUser!==null) {
//           this.isloggedIn = localStorage.setItem('isloggedIn','true');
//       }
//       console.log("this.isloggedIn: " + this.isloggedIn);

        //submit login post request
        return this.currUser;
    }

  updateUser(updatedUser: any): Observable<IUser[]> {
      let dataToSend = updatedUser;
      let idForParam = updatedUser._id;
      console.log("idForParam: " + idForParam);
        this.currUser = this.http.put<IUser[]>(this.baseUrl + "/" + idForParam, dataToSend)
        .pipe(catchError(this.errorHandler));
       // console.log(this.currUser);
       sessionStorage.setItem("contacts", JSON.stringify(this.currUser.contacts));
       //console.log("stored contacts: " + sessionStorage.getItem('contacts'));

       sessionStorage.setItem("notes", JSON.stringify(this.currUser.notes));

    
    return this.currUser;
  }

  logout() {
    this.isloggedIn = false;
    console.log("this.isloggedIn: " + this.isloggedIn);
        return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    //console.log("Returning isUserLoggedIn(): " + JSON.parse(localStorage.getItem('isloggedIn') || this.isloggedIn));
      return this.isloggedIn;
  }

  isAdminUser():boolean {
      if (this.userName=='Admin') {
          return true; 
      }
      return false;
  }

  logoutUser(): void{
    this.isloggedIn = false;
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }


}



/*


  _id: {type: mongoose.Types.ObjectId, auto: true},
    login_id: String,
    hashed_password: String,
    email: String,
    contacts: [{
        title: String,
        first_name: String,
        last_name: String,
        mobile_phone: String,
        office_phone: String,
        office_ext: String,
        fax: String,
        toll_free: String,
        toll_free_ext: String,
        email: String,
    }],
    notes: [{
        time_stamp: String,
        body: String,
    }],
    provider: [{
        zip_code: String,
        phone: String,
        phone_ext: String,
        fax: String,
        toll_free: String,
        email: String,
        primary_contact: String,
        time_zone: String,
        hour_start: Number,
        hour_end: Number,
        active: Boolean,
        rate_signed: Boolean,
        primary: Boolean
    }]

    */