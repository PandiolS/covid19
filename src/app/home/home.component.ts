import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public year = new Date().getFullYear();
  data: any;

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.getSystemData()
  }

  public getSystemData() {
    
    this.service.getGeneralData().subscribe((data) => {
      if (JSON.parse(data.body)) {
        this.data = JSON.parse(data.body);  
        localStorage.clear();   
        localStorage.setItem("rootObject", JSON.stringify(this.data.rootObject));
        localStorage.setItem("qarqe", JSON.stringify(this.data.qarqe));
        localStorage.setItem("deaths", JSON.stringify(this.data.deaths));

      }
    });
  }

}
