import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { IData } from 'src/app/shared/interface/IData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading: boolean;
  data: IData;
  header: any;
  local: any;
  dd: any;

  constructor(
    private service: ServiceService
  ) { 
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.loading = true;
    this.local = JSON.parse(localStorage.getItem("rootObject"));   
    this.header = this.local.tabs;
    this.loading = false;
  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);
     
  //     this.header = this.data.rootObject.tabs;
      
  //   this.loading = false;
  // });
}
}
