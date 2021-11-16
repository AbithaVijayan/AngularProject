import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  password:string="";
  loginForm:FormGroup=new FormGroup({});

  constructor() { }

  ngOnInit(): void {
      this.loginForm=new FormGroup({
      userName:new FormControl("Abitha"),
      password:new FormControl("abi123")
    });

  }
  loginFun():void{
    console.log(this.loginForm.value);
    console.log();
  }

}
