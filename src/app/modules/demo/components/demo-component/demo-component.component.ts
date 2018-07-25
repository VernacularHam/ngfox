import { Component } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { SharedTestComponent } from '../../../../shared/components/shared-test/shared-test.component';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'fox-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponent {

  constructor(private demo: DemoService) { }

  public createRecord() {
    const newRecord = {
      InitialStepId: '00000000-0000-0000-0000-000000000000',
      Data: {
        TenantUid: 'F8F5F1F9-2B47-4849-ABCD-19268EF14DE2',
        Id: 3,
        Uid: 'CC5153D3-2A0B-482B-AEB0-D30E1BBF90DF',
        FirstName: 'Jolene',
        LastName: 'Schmolene',
        Address1: '444 Main St',
        Address2: 'Apt 42',
        City: 'Columbus',
        State: 'OH',
        Zipcode: '43215',
        Cellphone: '614-555-5663',
        Mainphone: '614-555-5223',
        Email: 'joe.schmoe@aol.com',
        CreatedOn: '2018-07-19 16:14:52.477',
        ModifiedOn: '2018-07-19 16:14:52.477'
      }
    };
    this.demo.createRecord(newRecord);
  }

  public getRecords() {
    const getRecord = {
      Data: 'CC5153D3-2A0B-482B-AEB0-D30E1BBF90DF'
    };

    this.demo.getRecords(getRecord).subscribe(pocreturn => {
        console.log('GET: ');
        console.log(pocreturn);
      }
    );
  }

  public updateRecord() {
    const patchRecord = {
      InitialStepId: '00000000-0000-0000-0000-000000000000',
      Data: {
        TenantUid: 'F8F5F1F9-2B47-4849-ABCD-19268EF14DE2',
        Id: 3,
        Uid: 'CC5153D3-2A0B-482B-AEB0-D30E1BBF90DF',
        FirstName: 'Jolene',
        LastName: 'Schmolene',
        Address1: '444 Main St',
        Address2: 'Apt 44',
        City: 'Columbus',
        State: 'OH',
        Zipcode: '43215',
        Cellphone: '614-555-5663',
        Mainphone: '614-555-5223',
        Email: 'joelene.schmolene@aol.com',
        CreatedOn: '2018-07-20 16:14:52.477',
        ModifiedOn: '2018-07-20 16:14:52.477'
      }
    };

    this.demo.updateRecord(patchRecord);
  }

  public deleteRecord() {
    const deleteRecord = {
      InitialStepId: '00000000-0000-0000-0000-000000000000',
      Data: 'CC5153D3-2A0B-482B-AEB0-D30E1BBF90DF'
    };

    this.demo.deleteRecord(deleteRecord);
  }
}
