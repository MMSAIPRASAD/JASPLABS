import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Chart } from 'chart.js';  

export class Data {  
  studentname :string;  
  attendance:number;  
}
@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
  students: any;
  page = 1;
  pageSize = 5;count =10;
  public searchText: string;
  data: Data[];  
  student = [];  
  attendance = [];  
  Linechart : any; 
  constructor(private service: StudentService) { }
  ngOnInit() {
      this.service.getstudent().subscribe((resp: Data[]) => {
        resp.forEach(x => {

        this.students = resp;
        this.student.push(x.studentname);  
        this.attendance.push(x.attendance);
  })
      
      this.Linechart = new Chart('canvas', {  
        type: 'pie',  
        data: {  
          labels: this.student,  

          datasets: [  
            {  
              data: this.attendance,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  
  
  handlePageChange(event) {
    this.page = event;
  }

}





   
  


