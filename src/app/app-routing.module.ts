import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'foxdemo1',
    loadChildren: './modules/demo/demo.module#DemoModule'
  },
  {
    path: 'foxdemo2',
    loadChildren: './modules/demo/demo.module#DemoModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
