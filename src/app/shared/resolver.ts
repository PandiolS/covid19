import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service/service.service';


@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor(private api: ServiceService) { }

  resolve() {
    return this.api.getGeneralData();
  }
}