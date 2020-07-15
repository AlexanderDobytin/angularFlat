import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPaginationComponent } from './flat-pagination.component';

describe('FlatPaginationComponent', () => {
  let component: FlatPaginationComponent;
  let fixture: ComponentFixture<FlatPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
