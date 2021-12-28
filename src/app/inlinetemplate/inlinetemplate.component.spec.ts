import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinetemplateComponent } from './inlinetemplate.component';

describe('InlinetemplateComponent', () => {
  let component: InlinetemplateComponent;
  let fixture: ComponentFixture<InlinetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
