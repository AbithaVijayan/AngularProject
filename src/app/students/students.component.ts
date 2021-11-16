import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  temp:string|null;
  studId:number=0;
  studName:string|null;
  detailObj:Student|undefined;
  constructor(private activeRout:ActivatedRoute) {
    this.temp=activeRout.snapshot.paramMap.get("sid");
    if(this.temp!=null)
      this.studId=parseInt(this.temp);
    this.studName=activeRout.snapshot.paramMap.get("sname");
    this.deleteDetails();
    console.log(this.studentArray);
   }

  ngOnInit(): void {
  }

  studentArray:Array<Student>=[
    new Student(111,"Abitha","9th Std"),
    new Student(112,"Arun","7th Std"),
    new Student(113,"Ashika","8th Std"),
    new Student(114,"Harini","10th Std"),
    new Student(115,"Saritha","6th Std")

  ];
  deleteDetails(){
    this.detailObj=this.studentArray.find(detail=>detail.studId==this.studId);
    this.studentArray.forEach((item,index) => {
      console.log(this.studId,item.studId);
      if(item.studId == this.studId)
        this.studentArray.splice(index, 1);
    });
  }

}

class Student{
  studId:number;
  studName:string;
  studClass:string;
  constructor(id:number,name:string,sclass:string){
    this.studId=id;
    this.studName=name;
    this.studClass=sclass;
  }
}