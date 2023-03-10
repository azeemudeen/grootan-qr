import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrHomeComponent } from './qr-home.component';

describe('QrHomeComponent', () => {
  let component: QrHomeComponent;
  let fixture: ComponentFixture<QrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
