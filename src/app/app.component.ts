import { Component } from '@angular/core';
import { TodayService } from './today.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentManagement';
  image="src/assets/Myimages/image.jpg"
  today:Date;
  constructor(private mydate:TodayService){
    this.today=mydate.getDate();
  }

}
