import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBlockComponent } from './red-block.component';

describe('RedBlockComponent', () => {
  let component: RedBlockComponent;
  let fixture: ComponentFixture<RedBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
