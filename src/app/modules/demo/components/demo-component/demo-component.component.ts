import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { SharedTestComponent} from '../../../../shared/components/shared-test/shared-test.component';

@Component({
  selector: 'fox-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent implements OnInit {

  constructor(private restangular: Restangular) { }

  ngOnInit() {
  }

//   <p>
//   <button (click)="createRecord()">CREATE: POST</button>
//   <button (click)="getRecords()">GET</button>
//   <button (click)="updateRecord()">UPDATE: PUT</button>
//   <button (click)="deleteRecord()">DELETE</button>
// </p>


}
