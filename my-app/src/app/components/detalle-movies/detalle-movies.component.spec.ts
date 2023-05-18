import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMoviesComponent } from './detalle-movies.component';

describe('DetalleMoviesComponent', () => {
  let component: DetalleMoviesComponent;
  let fixture: ComponentFixture<DetalleMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleMoviesComponent]
    });
    fixture = TestBed.createComponent(DetalleMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
