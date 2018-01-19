import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let d3: any;

/* const lineChart = {
  "chart": {
    "type": "lineChart",
    "height": 450,
    "margin": {
      "top": 20,
      "right": 20,
      "bottom": 40,
      "left": 55
    },
    "useInteractiveGuideline": true,
    "dispatch": {},
    "xAxis": {
      "axisLabel": "Time (ms)"
    },
    "yAxis": {
      "axisLabel": "Voltage (v)",
      "axisLabelDistance": -10
    }
  },
  "title": {
    "enable": true,
    "text": "Title for Line Chart"
  },
  "subtitle": {
    "enable": true,
    "text": "Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.",
    "css": {
      "text-align": "center",
      "margin": "10px 13px 0px 7px"
    }
  },
  "caption": {
    "enable": true,
    "html": "<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style=\"text-decoration: underline;\">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style=\"color: darkred;\">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href=\"https://github.com/krispo/angular-nvd3\" target=\"_blank\">2</a>, 3]</sup>.",
    "css": {
      "text-align": "justify",
      "margin": "10px 13px 0px 7px"
    }
  }
};
 */
@Component({
  selector: 'app-homechart',
  templateUrl: './homechart.component.html',
  styleUrls: ['./homechart.component.css',
'./../../../../node_modules/nvd3/build/nv.d3.css'],
encapsulation: ViewEncapsulation.None
})
export class HomechartComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label' : 'A' ,
            'value' : -29.765957771107
          } ,
          {
            'label' : 'B' ,
            'value' : 0
          } ,
          {
            'label' : 'C' ,
            'value' : 32.807804682612
          } ,
          {
            'label' : 'D' ,
            'value' : 196.45946739256
          } ,
          {
            'label' : 'E' ,
            'value' : 0.19434030906893
          } ,
          {
            'label' : 'F' ,
            'value' : -98.079782601442
          } ,
          {
            'label' : 'G' ,
            'value' : -13.925743130903
          } ,
          {
            'label' : 'H' ,
            'value' : -5.1387322875705
          }
        ]
      }
    ];
  }
}
