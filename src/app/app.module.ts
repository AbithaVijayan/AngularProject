import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TodayService } from './today.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    StudentDetailsComponent,
    StudentsComponent,
    LogoutComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
