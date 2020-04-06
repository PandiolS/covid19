import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ServiceService } from 'src/app/shared/service/service.service';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-daily-new-cases',
  templateUrl: './daily-new-cases.component.html',
  styleUrls: ['./daily-new-cases.component.css']
})
export class DailyNewCasesComponent implements OnInit {

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

    this.local = JSON.parse(localStorage.getItem("rootObject"));
    this.local.kategorite.forEach(item => {
      this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
    });
    this.local.raste_te_reja.forEach(item => {
      this.chartData[0].data.push(item); 
    });
    this.loading = false;


  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);  
  //     //this.dataResult = this.data.newCases; 
  //     this.dataResult = this.data.rootObject; 
  //     this.dataResult.kategorite.forEach(item => {
  //       this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
  //     });
  //     this.dataResult.raste_te_reja.forEach(item => {
  //       this.chartData[0].data.push(item); 
  //     });
  //   this.loading = false;
  // });
}

}
