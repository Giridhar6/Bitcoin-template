import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import 'rxjs/add/operator/map';
import 'd3';
import 'nvd3';
import {Utils} from './Utils';
import {HostListener} from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';

declare let d3: any;

@Component({
  selector: 'app-asset-transtion',
  templateUrl: './asset-transtion.component.html',
  styleUrls: ['./asset-transtion.component.css', './../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssetTranstionComponent implements OnInit {
  myData: Array<any>;
  options;
  data;
  utils: Utils;
  colors: any[];

  ngOnInit() {
 this.generateChart();
 }

 constructor() {
   // let label: HTMLElement;
   // label = document.getElementsByClassName('mat-tab-label-active');
   //  label.setAttribute('color', 'green');
 }

 @HostListener('window:resize', ['$event'])
 onResize(event) {
   this.generateChart();
 }
 onClick(event) {
   console.log('dfsdf');
 }

 generateChart() {
   this.utils = new Utils();
   this.options = {
     chart: {
         type: 'lineChart',
         height: this.utils.screenHeight * .40,
         width : this.utils.screenWidth ,
         margin : {
             top: 20,
             right: 20,
             bottom: 40,
             left: 55
         },
         showLegend: false,
         background : 'blue',
         x: function(d){ return d.x; },
         y: function(d){ return d.y; },
         useInteractiveGuideline: false,
         xAxis: {
           showMaxMin: false
         },
         yAxis: {

             // tickFormat: function(d){
             //     return d3.format('.02f')(d);
             // },
             // axisLabelDistance: -10
         }
     },
     title: {
         enable: true,
         text: 'Title for Line Chart'
      },
 };
   this.data =  sinAndCos();
           /*Random Data Generator */
           function sinAndCos() {
               const axisValues = [];

              //  for ( var i = 0; i < 100; i++) {

              //      cos.push({x: i / 10, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
              //  }
              for ( let i = 0 ; i < 100; i++) {
                axisValues.push({ x: i / 100 , y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10, color : 'red' });
              }

               return [
                   {
                       values: axisValues,
                       key: 'Cosine Wave',
                       color: 'green',
                       background : 'black',
                       fillOpacity: .1,
                       strokeWidth: 1,
                       backgroundColor: 'rgba(225,10,24,0.2)',
                       borderColor: 'rgba(225,10,24,0.2)',
                       pointBackgroundColor: 'rgba(225,10,24,0.2)',
                       pointBorderColor: '#fff',
                       pointHoverBackgroundColor: '#fff',
                       pointHoverBorderColor: 'rgba(225,10,24,0.2)'
 }
 ]; }
 this.colors = [{
  backgroundColor: 'rgba(225,10,24,0.2)'
 }];

 }
}
