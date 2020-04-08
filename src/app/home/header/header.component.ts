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
  newCases: any;
  newSolved: any;
  te_sheruar: number;
  te_sheruar_dje: number;
  newDeath: number;

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
    this.newCases = this.local.raste_te_reja.pop();
    this.te_sheruar= this.header.te_sheruar;
    this.te_sheruar_dje = this.header.te_sheruar_dje;
    this.newSolved = this.te_sheruar - this.te_sheruar_dje;
    this.newDeath = (this.header.te_vdekur) - (this.header.te_vdekur_dje);
    this.loading = false;
  //   this.service.getGeneralData().subscribe((result) => {
  //     this.data = JSON.parse(result.body);
     
  //     this.header = this.data.rootObject.tabs;
      
  //   this.loading = false;
  // });
}
}
