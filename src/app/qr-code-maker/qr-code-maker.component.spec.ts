import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeMakerComponent } from './qr-code-maker.component';

describe('QrCodeMakerComponent', () => {
  let component: QrCodeMakerComponent;
  let fixture: ComponentFixture<QrCodeMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
