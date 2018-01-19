import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makeRequest() {
    this.router.navigate(['/transact/request']);
  }
}
