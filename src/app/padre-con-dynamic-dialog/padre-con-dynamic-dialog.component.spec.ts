import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreConDynamicDialogComponent } from './padre-con-dynamic-dialog.component';

describe('PadreConDynamicDialogComponent', () => {
  let component: PadreConDynamicDialogComponent;
  let fixture: ComponentFixture<PadreConDynamicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreConDynamicDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadreConDynamicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
