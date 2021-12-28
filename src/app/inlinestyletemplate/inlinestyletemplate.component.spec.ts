import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinestyletemplateComponent } from './inlinestyletemplate.component';

describe('InlinestyletemplateComponent', () => {
  let component: InlinestyletemplateComponent;
  let fixture: ComponentFixture<InlinestyletemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinestyletemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinestyletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
