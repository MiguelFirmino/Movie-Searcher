import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemComponent } from './movies-item.component';

describe('MoviesItemComponent', () => {
  let component: MoviesItemComponent;
  let fixture: ComponentFixture<MoviesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesItemComponent]
    });
    fixture = TestBed.createComponent(MoviesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
