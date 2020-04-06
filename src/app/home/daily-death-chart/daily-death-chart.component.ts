import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-daily-death-chart',
  templateUrl: './daily-death-chart.component.html',
  styleUrls: ['./daily-death-chart.component.css']
})
export class DailyDeathChartComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: 'Vdekje',
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
  loading: boolean = false;
  data: IData;
  dataResult: any;
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
    
    this.local = JSON.parse(localStorage.getItem("deaths"));

    this.local.kategorite.forEach(item => {
      this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
    });
    this.local.teste_ne_dite.forEach(item => {
      this.chartData[0].data.push(item); 
    });
    this.loading = false;

  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);  
  //     this.dataResult = this.data.deaths;    
  //     this.dataResult.kategorite.forEach(item => {
  //       this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
  //     });
  //     this.dataResult.teste_ne_dite.forEach(item => {
  //       this.chartData[0].data.push(item); 
  //     });
  //     this.loading = false;
  // });
}

}
