import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Models/Usuario'
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }

  user = new Usuario('','','','');

  ngOnInit(): void {
  }
  Registrar(){
    console.log("registrar ..")
    this.userservice.Register(this.user)
    this.router.navigateByUrl('/Login')
    // this.userservice.Register(this.user)
  }
  Login(event){
    event.preventDefault();
  this.router.navigateByUrl('/Login')
  }
}
