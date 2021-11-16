import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string="";
  age:number=0;
  mobile:number=0;
  fname:string="";
  userName:string="";
  password:string="";
  confirmPassword:string="";
  registerForm:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("",[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl("",[Validators.required, Validators.min(1), Validators.max(120)]),
      mobile:new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]),
      fname:new FormControl("",[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      userName:new FormControl("",[Validators.required, Validators.pattern("^[A-Za-z0-9]{4,20}$")]), 
      password:new FormControl("",[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{4,15}")]),
      confirmPassword:new FormControl("",[Validators.required])
     },
     {validators:this.matchPassword}
     );
  }


get uname(){
  return this.registerForm.get("name");
}
get userage(){
  return this.registerForm.get("age");
}
get usermobile(){
  return this.registerForm.get("mobile");
}
get userfname(){
  return this.registerForm.get("fname");
}
get username1(){
  return this.registerForm.get("userName");
}
get pass(){
  return this.registerForm.get("password");
}
get cpass(){
  return this.registerForm.get("confirmPassword");
}
registerFun():void{
  console.log(this.registerForm.value);
}

private matchPassword(regForm:FormGroup):any{
  let passControl=regForm.get("password");
  let confirmPassControl=regForm.get("confirmPassword");
  if(passControl.value==confirmPassControl.value)
    return null;
  else
    return{'passMismatch':true};
}

}