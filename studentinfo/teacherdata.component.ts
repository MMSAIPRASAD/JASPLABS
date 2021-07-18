import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { FilterPipe } from 'src/app/studentinfo/filter.pipe';
import { Chart } from 'chart.js';

export class Data {
  teachername: string;
  attendance: number;
}
@Component({
  selector: 'app-teacherdata',
  templateUrl: './teacherdata.component.html',
  styleUrls: ['./teacherdata.component.css']
})
export class TeacherdataComponent implements OnInit {
  teachers: any;

  page = 1;
  pageSize = 5; count = 10;
  public searchText: string;
  data: Data[];
  teacher = [];
  attendance = [];
  Linechart: any;
  constructor(private service: StudentService) { }

  ngOnInit() {

    this.service.getteacher().subscribe((resp: Data[]) => {
      resp.forEach(x => {

        this.teachers = resp;
        this.teacher.push(x.teachername);
        this.attendance.push(x.attendance);
      })

      this.Linechart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: this.teacher,

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









