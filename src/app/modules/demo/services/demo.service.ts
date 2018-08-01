import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  /* Though it is possible to dependency inject services below the root level,
  and this sounds preferable in certain situations, Angular 6's recommended practice is to inject them
  at root anyways as it serves angular's tree shaking better.
  See - https://stackoverflow.com/questions/50208642/angular-6-dependency-injection */
})
export class DemoService {
  private awsPoC;

  constructor(private restangular: Restangular) {
    this.awsPoC = this.restangular.one('person');
  }

  public createRecord(record) {
    console.log('createRecord:');
    console.log(record);
    this.awsPoC.post('', record);
  }

  public getRecords(record): Observable<any> {
    return this.awsPoC.get(record);
  }

  public updateRecord(record) {
    this.awsPoC.patch(record);
  }

  public deleteRecord(record) {
    this.awsPoC.remove(record);
  }
}
