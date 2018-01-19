import { OrderDialogComponent } from './../order-dialog/order-dialog.component';
import { MatDialog } from '@angular/material';
import { Route, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MediaComponent } from './../media-component';
import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent extends MediaComponent implements OnInit {

  @ViewChild('menuContainer') menuContainer: ElementRef;
  @ViewChild('transactionAmountLabel') amountlabel: ElementRef;
  menuHeight: string;
  btcVal = 0;
  canRequest = false;

  constructor(private changeDetectorRef: ChangeDetectorRef, private mediamatcher: MediaMatcher, public route: ActivatedRoute,
     private dialog: MatDialog) {
    super(changeDetectorRef, mediamatcher);
   }

  ngOnInit() {
    this.menuHeight = window.getComputedStyle(this.menuContainer.nativeElement).height;
    this.amountlabel.nativeElement.style.float = 'right';
    this.amountlabel.nativeElement.style.direction = 'ltr';
    this.route.data.subscribe(data => {
      this.canRequest = data.isRequest;
    });
  }

  @HostListener('window:resize', ['$event']) changeMarginTop(event) {
    this.menuHeight = window.getComputedStyle(this.menuContainer.nativeElement).height;
  }


  openDialog() {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '95vh',
    height: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
