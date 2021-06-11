import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'logifront';
  pattern = "login";
  defaultroot = "/" 
  bool:boolean = true;

  constructor(public router:Router, public activeroute: ActivatedRoute) { }
  
  ngOnInit(): void{
  console.log("This is activeroute"+this.activeroute);
  //this.activeroute['_routerState'].snapshot.url
  console.log("this is router"+this.router);
  console.log("this is router url"+this.router.url);
  
  console.log("This is activeroute url"+JSON.stringify(this.activeroute.url));
  
  //console.log(this.router.url);
  //this.pattern = Validators.pattern("login*")
  // if(this.router.url.includes(this.pattern) || this.router.url.includes(this.defaultroot)) {this.bool = false}
  // else this.bool = true
  //  if(this.router.url.includes('login')) this.bool = false
  //  else this.bool = true

   this.bool=this.router.isActive('/mainpage',true)
  
  }
  
}
