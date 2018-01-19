import { Directive, ElementRef } from '@angular/core';


// CustomTabDirective defines tab buttons style
@Directive({
  selector: '[appCustomTab]'
})
export class CustomTabDirective {

  constructor(private ele: ElementRef) {
   }
   ngAfterViewInit() {
    const tablabels = this.ele.nativeElement.querySelectorAll('div.mat-tab-labels div.mat-tab-label');
    tablabels.forEach(element => {
      element.style.width = '100%';
      element.style.padding = '0px 1px';
      element.querySelector('button').style.width = '100%';
    });
   }
}
