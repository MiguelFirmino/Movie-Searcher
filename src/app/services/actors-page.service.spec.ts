import { TestBed } from '@angular/core/testing';

import { ActorsPageService } from './actors-page.service';

describe('ActorsPageService', () => {
  let service: ActorsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
