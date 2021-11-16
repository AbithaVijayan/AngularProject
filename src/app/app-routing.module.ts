import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'student', component:StudentsComponent},
  {path:'studentDetails/:sid',component:StudentDetailsComponent},
  {path:'deleteStudent/:sid', component:StudentsComponent},
  {path:'logout', component:LogoutComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
