import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../shared/interface/IData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public year = new Date().getFullYear();
  data: any;
  kll: any;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute
  ) {this.getSystemData() }

  ngOnInit() {   
    
  }


  public getSystemData() {
    this.data = this.route.snapshot.data.obj;
    this.kll = JSON.parse(this.data.body);

    localStorage.setItem("rootObject", JSON.stringify(this.kll.rootObject));
        localStorage.setItem("qarqe", JSON.stringify(this.kll.qarqe));
        localStorage.setItem("deaths", JSON.stringify(this.kll.deaths));
    
    // this.service.getGeneralData().subscribe((data) => {
    //   if (JSON.parse(data.body)) {
    //     this.data = JSON.parse(data.body);   
    //     localStorage.setItem("rootObject", JSON.stringify(this.data.rootObject));
    //     localStorage.setItem("qarqe", JSON.stringify(this.data.qarqe));
    //     localStorage.setItem("deaths", JSON.stringify(this.data.deaths));

    //   }
    // });
  }

}
