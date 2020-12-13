import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'
import {Usuario} from '../../Models/Usuario'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userservice:UserService) { }

  nombre:string
  
  ngOnInit(): void {
  
  }
  Profile(){
    // this.usuario.nombre='jose'
    // console.log(this.userservice)
  }
 
 

}
