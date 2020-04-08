import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ServiceService } from 'src/app/shared/service/service.service';
import { DatePipe } from '@angular/common';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-activ-gjinia',
  templateUrl: './activ-gjinia.component.html',
  styleUrls: ['./activ-gjinia.component.css']
})
export class ActivGjiniaComponent implements OnInit {

  public chartLabel = [];
  public chartData = [
    {
      label: "Gjinia",
      data: []
    }
    
  ];

  public colors = [
    {
      backgroundColor: ["#05488A", "#CF0759"]
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
    this.dataResult = this.local.aktiv_gjinia;
    this.dataResult.forEach(item => {
      if(item.name == "M")  { this.chartLabel.push("Meshkuj"); }
      if(item.name == "F")  { this.chartLabel.push("Femra"); }      
      this.chartData[0].data.push(item.y)
    });
   
    this.loading = false;


 
}

}
