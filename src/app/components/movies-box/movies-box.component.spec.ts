import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBoxComponent } from './movies-box.component';

describe('MoviesBoxComponent', () => {
  let component: MoviesBoxComponent;
  let fixture: ComponentFixture<MoviesBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesBoxComponent]
    });
    fixture = TestBed.createComponent(MoviesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
