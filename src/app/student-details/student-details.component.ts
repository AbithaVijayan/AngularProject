import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  temp:string|null;
  studId:number=0;
  studName:string|null;
  detailObj:StudentDetails|undefined;
  constructor(private activeRout:ActivatedRoute) { 
    this.temp=activeRout.snapshot.paramMap.get("sid");
    if(this.temp!=null)
      this.studId=parseInt(this.temp);
    this.studName=activeRout.snapshot.paramMap.get("sname");
    console.log(this.studId);
    this.findDetails();
  }

  ngOnInit(): void {
  }

  studDetailsArray:StudentDetails[]=[
    new StudentDetails(111,"Abitha","female","Vijayan",17,8909875654),
    new StudentDetails(112,"Arun","male","Raja",14,98346454654),
    new StudentDetails(113,"Ashika","female","Ram",12,9904312321),
    new StudentDetails(114,"Harini","female","Hari",19,9000876785),
    new StudentDetails(115,"Saritha","female","Kesavan",16,6788098932)
  ];
  findDetails(){
    this.detailObj=this.studDetailsArray.find(detail=>detail.studId==this.studId);
  }

}

class StudentDetails{
  studId:number;
  studName:string;
  gender:string;
  father:string;
  age:number;
  phone:number;
  constructor(id:number,name:string,gender:string,fname:string,age:number,phone:number){
    this.studId=id;
    this.studName=name;
    this.gender=gender;
    this.father=fname;
    this.age=age;
    this.phone=phone;
  }

}