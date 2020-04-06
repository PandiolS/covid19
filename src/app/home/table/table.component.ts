import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  loading: boolean;
  data: IData;
  dataResult: any;
  local: any;

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;

    this.local = JSON.parse(localStorage.getItem("qarqe"));
    this.dataResult = this.local;

    this.loading = false;
  //   this.loading = false;
  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);  
  //     this.dataResult = this.data.qarqe;
  //   this.loading = false;
  // });
}


}
