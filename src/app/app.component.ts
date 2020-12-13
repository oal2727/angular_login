import { Component } from '@angular/core';
// import {Usuario} from '../Models/Usuario.ts'
import {Usuario} from './Models/Usuario'
import {Auth} from './Models/Auth'
import {Router} from '@angular/router';
import {UserService} from './service/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  constructor(private router:Router,public userservice:UserService){}
 
 
  nombre:string
  auth = new Auth()
  ngOnInit(): void {
    this.userservice.currentUser().subscribe(e => {
      if(e.status == 200){
        this.userservice.authenticated=true
        this.userservice.user.nombre=e.user.nombre
        this.userservice.user.apellido=e.user.apellido
      }else{
        this.userservice.authenticated=false
      }
    })
    // console.log(this.userservice.user.nombre)
  }
  Logout($event){
    event.preventDefault()
    this.auth.removeToken()
    this.userservice.authenticated=false
    this.router.navigateByUrl('/')
  }
    getToken(){
      return this.auth.getToken()
    }
   
}
