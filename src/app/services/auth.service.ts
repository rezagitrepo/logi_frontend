import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../LoginModel';
import UserModel from '../UserModel'
import IUser from '../interfaces/IUser'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl:string = "http://localhost:3000/api/users/login";
   currUser: any;
    errorMessage: any;
  private isloggedIn: boolean;
  private userName:string | undefined;

  constructor(private http: HttpClient) {
      this.isloggedIn=false;
  }

  login(login_cred: Login): Observable<IUser[]> {
      let dataToSend = login_cred;
    //   console.log("request sent from Angular: " + JSON.stringify(dataToSend));
        let response = this.http.post<IUser[]>(this.loginUrl, dataToSend)
        .pipe(catchError(this.errorHandler));
        console.log(response);
    //submit login post request
    return response;

    //   this.isloggedIn=true;
    //   this.userName=username;
    //   return of(this.isloggedIn);
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
