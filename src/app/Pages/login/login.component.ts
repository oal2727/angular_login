import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'
import { FormBuilder } from '@angular/forms';
import {Usuario} from '../../Models/Usuario'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceuser:UserService,
  private fb:FormBuilder,private router:Router) { 
  

  }
  user = new Usuario('','','','')
  ngOnInit(): void {
  }
  onSubmit(){
    const param ={
      email:this.user.email,
      password:this.user.password
    }
    this.serviceuser.Login(param)
  }
  Register(event){
    event.preventDefault();
    this.router.navigateByUrl('/Register')
  }

}
