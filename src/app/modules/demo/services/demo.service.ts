import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
  /* Though it is possible to dependency inject services below the root level,
  and this sounds preferable in certain situations, Angular's recommended practice is to inject them
  at root anyways as it serves angular's tree shaking better.*/
})
export class DemoService {
  private awsPoC;

  constructor(private restangular: Restangular) {
    this.awsPoC = this.restangular.one('poc');
  }

  public createRecord(record) {
    this.awsPoC.post(record);
  }

  public getRecords() {
    this.awsPoC.get().subscribe(pocreturn => {
        console.log('GET: ');
        console.log(pocreturn);
      }
    );
  }

  public updateRecord(record) {
    this.awsPoC.patch(record);
  }

  public deleteRecord(record) {
    this.awsPoC.remove(record);
  }
}
