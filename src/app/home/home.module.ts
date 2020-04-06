import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ChartS1Component } from './chart-s1/chart-s1.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { TotalCaseChartComponent } from './total-case-chart/total-case-chart.component';
import { DailyDeathChartComponent } from './daily-death-chart/daily-death-chart.component';
import { TotalDeathComponent } from './total-death/total-death.component';
import { DailyNewCasesComponent } from './daily-new-cases/daily-new-cases.component';
import { CityCasesComponent } from './city-cases/city-cases.component';

@NgModule({
  declarations: [    
  HeaderComponent,    
  TableComponent, 
  ChartS1Component, 
  TotalCaseChartComponent, 
  DailyDeathChartComponent, 
  TotalDeathComponent, 
  DailyNewCasesComponent, 
  CityCasesComponent
  
],
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,    
    TableComponent,
    ChartS1Component,
    TotalCaseChartComponent,
    DailyDeathChartComponent,
    TotalDeathComponent,
    DailyNewCasesComponent,
    CityCasesComponent
  ],
  providers:[
    DatePipe
  ]
})
export class HomeModule { }
