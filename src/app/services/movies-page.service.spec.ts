import { TestBed } from '@angular/core/testing';

import { MoviesPageService } from './movies-page.service';

describe('MoviesPageService', () => {
  let service: MoviesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
