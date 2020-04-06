import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ServiceService } from 'src/app/shared/service/service.service';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-total-death',
  templateUrl: './total-death.component.html',
  styleUrls: ['./total-death.component.css']
})
export class TotalDeathComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: 'Vdekje',
      data: [],
      fill: false,
      borderColor: '#f1af20',
      pointBackgroundColor:'#f1af20'
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

    this.dataResult = this.local; 
    this.dataResult.kategorite.forEach(item => {
      this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
    });
    this.dataResult.vdekje_kumulative.forEach(item => {
      this.chartData[0].data.push(item); 
    });

    this.loading = false;

  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);   
  //     // this.dataResult = this.data.totalDeaths;      
  //     // this.dataResult.forEach(item => {
  //     //   this.chartLabel.push(this.datePipe.transform(item.date, 'd MMM'));    
  //     //   this.chartData[0].data.push(item.num) 
  //     // });


  //     this.dataResult = this.data.rootObject; 
  //     this.dataResult.kategorite.forEach(item => {
  //       this.chartLabel.push(this.datePipe.transform(item, 'd MMM')); 
  //     });
  //     this.dataResult.vdekje_kumulative.forEach(item => {
  //       this.chartData[0].data.push(item); 
  //     });

  //   this.loading = false;
  // });
}

}
