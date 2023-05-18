import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTvShowComponent } from './detalle-tv-show.component';

describe('DetalleTvShowComponent', () => {
  let component: DetalleTvShowComponent;
  let fixture: ComponentFixture<DetalleTvShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTvShowComponent]
    });
    fixture = TestBed.createComponent(DetalleTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
