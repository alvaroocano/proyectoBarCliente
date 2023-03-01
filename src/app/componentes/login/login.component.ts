import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "src/app/servicios/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email:string="";
  password:string="";

  constructor(public userService:UsersService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
       console.log(data);
    });
  }
}