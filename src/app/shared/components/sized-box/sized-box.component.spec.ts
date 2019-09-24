import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedBoxComponent } from './sized-box.component';

describe('SizedBoxComponent', () => {
  let component: SizedBoxComponent;
  let fixture: ComponentFixture<SizedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
