/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreviewImageComponent } from './preview-image.component';

describe('PreviewImageComponent', () => {
  let component: PreviewImageComponent;
  let fixture: ComponentFixture<PreviewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
