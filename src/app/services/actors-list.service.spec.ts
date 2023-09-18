import { TestBed } from '@angular/core/testing';

import { ActorsListService } from './actors-list.service';

describe('ActorsListService', () => {
  let service: ActorsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
