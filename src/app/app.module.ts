import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule,CanActivate } from '@angular/router'; // CLI imports router


import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
// import {UserService} from ''
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { ProfileComponent } from './Pages/profile/profile.component';
import {AuthGuard} from './guards/auth.guard'

// import routes from './Routes/routing'
const routes : Routes=[
  {path:'Login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Profile',component:ProfileComponent,canActivate:[AuthGuard]},
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
