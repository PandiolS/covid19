import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChartType } from 'chart.js';
import { ServiceService } from 'src/app/shared/service/service.service';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-city-cases',
  templateUrl: './city-cases.component.html',
  styleUrls: ['./city-cases.component.css']
})
export class CityCasesComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: 'Raste',
      data: []
    }
  ];

  public colors = [
    {
      backgroundColor: 'rgba(194, 194, 194, 0.8)'
    },
  ];
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',                  
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };
  public ChartType: ChartType = 'bar';
  public pieChartLegend = true;  
  loading: boolean;
  data: IData;
  result: any;
  local: any;
  


  constructor(
    private service: ServiceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getData();
  }

getData() {
    this.loading = true;
    
    this.local = JSON.parse(localStorage.getItem("qarqe"));

    this.local.forEach(item => {
      this.chartLabel.push(item.qarku);    
      this.chartData[0].data.push(item.raste_gjithsej) 
    });
    this.loading = false;

//     this.service.getGeneralData().subscribe((result) => {
//       this.data = JSON.parse(result.body); 
         
//       this.result = this.data.qarqe;
//       // this.result.forEach(item => {
//       //   this.chartLabel.push(item.city);    
//       //   this.chartData[0].data.push(item.total) 
//       // });
//       this.result.forEach(item => {
//         this.chartLabel.push(item.qarku);    
//         this.chartData[0].data.push(item.raste_gjithsej) 
//       });

//     this.loading = false;
//   });

 }

}
