import { Router } from '@angular/router';
import { MediaComponent } from './../media-component';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends MediaComponent {

  selectedTabIndex = 0;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    super(changeDetectorRef, media);
  }

  navToTransact() {
   this.router.navigate(['/transact']);
  }

  navTo(path: string) {
    this.router.navigate([path]);
  }

}


