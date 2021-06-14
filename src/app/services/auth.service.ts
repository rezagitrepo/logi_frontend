import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../LoginModel';
import UserModel from '../UserModel';
import { IUser, IContact, INote, IProvider } from '../interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "http://localhost:3000/api/users";
  private loginUrl:string = "http://localhost:3000/api/users/login";
  private currUser: any;
  private errorMessage: any;
  private isloggedIn: boolean;
  private userName:string | undefined;

  constructor(private http: HttpClient) {
      this.isloggedIn=false;
  }

  login(login_cred: Login): Observable<IUser[]> {
      let dataToSend = login_cred;
    //   console.log("request sent from Angular: " + JSON.stringify(dataToSend));
        this.currUser = this.http.post<IUser[]>(this.loginUrl, dataToSend)
        .pipe(catchError(this.errorHandler));
        console.log(this.currUser);


    //submit login post request
    return this.currUser;

    //   this.isloggedIn=true;
    //   this.userName=username;
    //   return of(this.isloggedIn);
  }

  getCurrentUser(): Observable<IUser[]> {
      return this.currUser;
  }

  updateUser(updatedUser: any): Observable<IUser[]> {
      let dataToSend = updatedUser;
      let idForParam = updatedUser._id;
      console.log("idForParam: " + idForParam);
        this.currUser = this.http.put<IUser[]>(this.baseUrl + "/" + idForParam, dataToSend)
        .pipe(catchError(this.errorHandler));
       // console.log(this.currUser);

    return this.currUser;
  }

  logout() {
        this.isloggedIn=false;
        return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
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