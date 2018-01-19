import { OrderDialogComponent } from './../../components/order-dialog/order-dialog.component';
import { AssetListComponent } from './../../components/asset-list/asset-list.component';
import { PriceComponent } from './../../components/price/price.component';
import { HomechartComponent } from './../../components/homechart/homechart.component';
import { AssetTranstionComponent } from './../../components/asset-transtion/asset-transtion.component';
import { CommonComponent } from './../../components/common/common.component';
import { HomeComponent } from './../../components/home/home.component';
import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AirtelComponent } from '../../components/airtel/airtel.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'transact',
    component: CommonComponent,
    data: { isRequest: false },
    pathMatch: 'full'
  },
  {
    path: 'transact/request',
    component: CommonComponent,
    data: { isRequest: true },
    pathMatch: 'full'
  },
  {
    path: 'asset',
    component: AssetTranstionComponent,
    pathMatch: 'full'
  },
  {
    path: 'price',
    component: PriceComponent,
    pathMatch: 'full'
  },
  {
    path: 'asset/list',
    component: AssetListComponent,
    pathMatch: 'full'
  },
  {
    path: 'chart',
    component: HomechartComponent,
    pathMatch: 'full'
  },
  {
    path: 'airtel',
    component: AirtelComponent,
    pathMatch: 'full'
  }

];



// RoutingModule defines routing configuration of root application
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
