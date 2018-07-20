import { Component } from '@angular/core';
import { DemoComponentComponent } from './modules/demo/components/demo-component/demo-component.component';

@Component({
  selector: 'fox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fox';
}
