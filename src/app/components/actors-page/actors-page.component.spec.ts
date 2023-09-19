import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsPageComponent } from './actors-page.component';

describe('ActorsPageComponent', () => {
  let component: ActorsPageComponent;
  let fixture: ComponentFixture<ActorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsPageComponent]
    });
    fixture = TestBed.createComponent(ActorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
