import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-strengthlist',
  templateUrl: './strengthlist.component.html',
  styleUrls: ['./strengthlist.component.css']
})
export class StrengthlistComponent implements OnInit {
  students: any;
  teachers: any;
  nonteaching: any;
  strength: any;
  nonteacher = false;
  teacher = false;
  student = false;
  
constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getstrength().subscribe(resp => {
      this.strength = resp;
    })
}
  getstudentlist() {
    this.student = true;
    this.teacher = false;
    this.nonteacher = false;
   
     
  }
  getteacherlist() {
    this.teacher = true;
    this.student = false;
    this.nonteacher = false;
   
  }

  getnonteacherlist() {
    this.nonteacher = true;
    this.student = false;
    this.teacher = false;
    
  }

}
