import { TestBed } from '@angular/core/testing';

import { MoviesListService } from './movies-list.service';

describe('MoviesListService', () => {
  let service: MoviesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
