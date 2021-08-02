import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MineComponent } from './mine.component';

describe('MineComponent', () => {
  let component: MineComponent;
  let fixture: ComponentFixture<MineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
