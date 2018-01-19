import { MediaMatcher } from '@angular/cdk/layout';
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

export class MediaComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

    ngOnInit() {
    }

    ngOnDestroy(): void {
      // destroys the listener of mediaquery while destroying the component
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
