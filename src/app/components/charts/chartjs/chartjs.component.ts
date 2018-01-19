import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700, 5600], label: 'Account A' },
    { data: [120, 455, 100, 340, 899], label: 'Account B' },
    { data: [45, 67, 800, 500, 455], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April', 'May', 'June'];

  constructor() { }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
    console.log('event sucess');
  }
}
