import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarComponent } from './top-nav-bar.component';

describe('TopNavBarComponent', () => {
  let component: TopNavBarComponent;
  let fixture: ComponentFixture<TopNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavBarComponent]
    });
    fixture = TestBed.createComponent(TopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
