import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateClassGuardGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.authService.isUserLoggedIn()) return true;
      else { 
        alert('You need Log In to view this page');
        this.router.navigate(["login"])
        return false;
       }
      
  }
  
}
