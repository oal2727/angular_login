import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../service/user.service'
import {Auth} from '../Models/Auth'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private service:UserService){

  }
  auth = new Auth()
  canActivate():boolean{
    if(this.auth.getToken()){
      console.log("existe token")
      return true;
    }else{
      console.log("no existe token")
      // return false;
      this.router.navigate([''])
      return false
    }
  }

}
