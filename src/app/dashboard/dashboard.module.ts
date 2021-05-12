import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { LazycomponentComponent } from './lazycomponent/lazycomponent.component';
import { Asset1Component } from './asset1/asset1.component';
import { Asset2Component } from './asset2/asset2.component';

const routes: Routes = [
  { path: 'check', component: DashboardComponent, data: {animation: 'default'}},


];


@NgModule({
  declarations: [
    DashboardComponent,
    LazycomponentComponent,
    Asset1Component,
    Asset2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardModule { }
