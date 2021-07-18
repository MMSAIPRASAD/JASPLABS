import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Chart } from 'chart.js';  

export class Data {  
  staffname :string;  
  attendance:number;  
}
@Component({
  selector: 'app-nonteacherdata',
  templateUrl: './nonteacherdata.component.html',
  styleUrls: ['./nonteacherdata.component.css']
})
export class NonteacherdataComponent implements OnInit {
  nonteaching: any;
  page = 1;
  pageSize = 5;count =10;
  public searchText: string;
  data: Data[];  
  nonteacher = [];  
  attendance = [];  
  Linechart : any; 
  constructor(private service: StudentService) { }
  ngOnInit() {
      this.service.getnonteaching().subscribe((resp: Data[]) => {
        resp.forEach(x => {
        this.nonteaching = resp;
          
          this.nonteacher.push(x.staffname);  
          this.attendance.push(x.attendance);
    })
        
        this.Linechart = new Chart('canvas', {  
          type: 'pie',  
          data: {  
            labels: this.nonteacher,  
  
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


  

 