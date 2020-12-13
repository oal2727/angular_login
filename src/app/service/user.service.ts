import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Usuario,User} from '../Models/Usuario'
import {Auth} from '../Models/Auth'
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
   constructor(private http:HttpClient,private route:Router) 
  { }
  url:string = "http://localhost:8083/ReactWeb/controller/Api"
  auth = new Auth()
  token:string = localStorage.getItem('token')
  user = new Usuario('','','','')
  authenticated :boolean  = false

  Login(data){
    this.http.post<any>(`${this.url}/LoginController.php`,data).subscribe(e =>{
      this.auth.setToken(e.token)
      this.authenticated=true
      this.user.nombre=e.user.nombre
      this.user.apellido=e.user.apellido
      this.route.navigateByUrl('/Profile')
    })
  }
  Register(user:Usuario){
    return this.http.post(`${this.url}/UserController.php`,user)
  }

  currentUser(){
    //tiempo de espera por el servidor en mostrar datos
    const headers= new HttpHeaders()
  .set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(`${this.url}/LoginController.php`,{headers})
  }


}




