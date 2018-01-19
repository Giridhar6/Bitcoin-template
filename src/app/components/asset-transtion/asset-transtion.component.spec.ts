import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTranstionComponent } from './asset-transtion.component';

describe('AssetTranstionComponent', () => {
  let component: AssetTranstionComponent;
  let fixture: ComponentFixture<AssetTranstionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTranstionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTranstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
