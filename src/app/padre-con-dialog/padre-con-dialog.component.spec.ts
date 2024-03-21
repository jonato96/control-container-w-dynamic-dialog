import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreConDialogComponent } from './padre-con-dialog.component';

describe('PadreConDialogComponent', () => {
  let component: PadreConDialogComponent;
  let fixture: ComponentFixture<PadreConDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreConDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadreConDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
