import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core/layout/default-layout/default-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LazycomponentComponent } from './dashboard/lazycomponent/lazycomponent.component';
import {Asset1Component} from './dashboard/asset1/asset1.component';
import {Asset2Component} from './dashboard/asset2/asset2.component';

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: [
    { path: 'load',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '', redirectTo: '/load', pathMatch: 'full'},
    { path: 'check2', component: LazycomponentComponent , data: {animation: 'Check2'}},
    { path: 'asset1', component: Asset1Component , data: {animation: 'Asset1'}},
    { path: 'asset2', component: Asset2Component, data: {animation: 'Asset2'}}

   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
