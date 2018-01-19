import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { PriceComponent } from './components/price/price.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './modules/routing/routing.module';
import { CustomTabDirective } from './directives/custom-tab.directive';
import { CommonComponent } from './components/common/common.component';
import { AssetTranstionComponent } from './components/asset-transtion/asset-transtion.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { HomechartComponent } from './components/homechart/homechart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AirtelComponent } from './components/airtel/airtel.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomTabDirective,
    CommonComponent,
    AssetTranstionComponent,
    HomechartComponent,
    PriceComponent,
    AssetListComponent,
    OrderDialogComponent,
    PaymentComponent,
    AirtelComponent,
    ChartjsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // Defines angular material components
    RoutingModule,  // Defines routing configurations
    NvD3Module,
    ChartsModule
  ],
  providers: [
    MediaMatcher // CDK provider to detect mobile, desktop etc.
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    OrderDialogComponent
  ]
})
export class AppModule { }
