import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ServiceService } from 'src/app/shared/service/service.service';
import { IData } from 'src/app/shared/interface/IData';


@Component({
  selector: 'app-chart-s1',
  templateUrl: './chart-s1.component.html',
  styleUrls: ['./chart-s1.component.css']
})
export class ChartS1Component implements OnInit {
  
  public piechart1Label = [];
  public piechart1Data = [];
  loading: boolean;
  data: IData;
  dataResult: any;
  
    // Pie chart 1
    public pieChartOptions = {
      responsive: true,
    maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',                  
    },tooltips: {
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
          return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
        }
      }

    }
    };
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;  
    public piechart1Color = [{backgroundColor: ['#FFDC00', '#2ECC40', '#FF4136']}      
  ];
  local: any;


  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.loading = true;

    this.local = JSON.parse(localStorage.getItem("rootObject"));
    this.dataResult = this.local.tabs;
    this.piechart1Label.push("Aktiv");
      this.piechart1Label.push("Shëruar");
      this.piechart1Label.push("Vdekje");
      this.piechart1Data.push(this.dataResult.raste_aktive)
      this.piechart1Data.push(this.dataResult.te_sheruar)
      this.piechart1Data.push(this.dataResult.te_vdekur)   
      this.loading = false;

  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);
  //     this.dataResult = this.data.rootObject.tabs;      
  //     this.piechart1Label.push("Aktiv");
  //     this.piechart1Label.push("Shëruar");
  //     this.piechart1Label.push("Vdekje");
  //     this.piechart1Data.push(this.dataResult.raste_aktive)
  //     this.piechart1Data.push(this.dataResult.te_sheruar)
  //     this.piechart1Data.push(this.dataResult.te_vdekur)    
  //   this.loading = false;
  // });
}

}
