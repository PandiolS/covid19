import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-total-case-chart',
  templateUrl: './total-case-chart.component.html',
  styleUrls: ['./total-case-chart.component.css']
})
export class TotalCaseChartComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: 'Raste',
      data: [],
      fill: false,
      borderColor: '#4bc0c0',
      pointBackgroundColor:'#4bc0c0'
    },  
    {
      label: 'Shëruar',
      data: [],
      fill: false,
      borderColor: '#30a33d',
      pointBackgroundColor:'#30a33d'
    },  
  ];

  loading: boolean;
  data: IData;
  dataResult: any;


     // Line chart 1
     public pieChartOptions = {
      responsive: true,
      fill: false,
      maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',                  
    }
    };
    public pieChartType: ChartType = 'line';
    public pieChartLegend = true;  
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

    this.dataResult = this.local
    this.dataResult.kategorite.forEach(item => {
      this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
    });

    this.dataResult.raste_kumulative.forEach(item => {
      this.chartData[0].data.push(item); 
    });

    this.dataResult.sheruar.forEach(item => {
      this.chartData[1].data.push(item); 
    });

    this.loading = false;

  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);  
  //   //  this.dataResult = this.data.totalCases;        
  //   //   this.dataResult.forEach(item => {
  //   //     this.chartLabel.push(this.datePipe.transform(item.date, 'd MMM'));    
  //   //     this.chartData[0].data.push(item.num) 
  //   //   });

  //   this.dataResult = this.data.rootObject; 
  //   this.dataResult.kategorite.forEach(item => {
  //     this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
  //   });

  //   this.dataResult.raste_kumulative.forEach(item => {
  //     this.chartData[0].data.push(item); 
  //   });

  //   this.dataResult.sheruar.forEach(item => {
  //     this.chartData[1].data.push(item); 
  //   });

  //   this.loading = false;
  // });
}

}
