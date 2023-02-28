import { Component } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email:string="";
  password:string="";

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}