import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ServiceService } from 'src/app/shared/service/service.service';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-activ-mosha',
  templateUrl: './activ-mosha.component.html',
  styleUrls: ['./activ-mosha.component.css']
})
export class ActivMoshaComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: "Grupmosha",
      data: []
    }
    
  ];

  public colors = [
    {
      backgroundColor: "#FFC300"
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
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const allData = data.datasets[tooltipItem.datasetIndex].data;
          const tooltipLabel = data.labels[tooltipItem.index];
          const tooltipData = allData[tooltipItem.index];
          let total = 0;
          for (const i in allData) {
            total += allData[i];
          }
          const tooltipPercentage = Math.round((tooltipData / total) * 100);
          return tooltipLabel + ': ' + ' (' + tooltipPercentage.toFixed(2) + '%)';
        }
      }
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

    this.local = JSON.parse(localStorage.getItem("statObject"));
    this.dataResult = this.local.aktiv_grupmoshe;
    this.dataResult.forEach(item => {
      this.chartLabel.push(item.name);
      this.chartData[0].data.push(item.y)     
    });
   
    this.loading = false;


 
}

}
