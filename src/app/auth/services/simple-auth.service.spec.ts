import { TestBed } from '@angular/core/testing';

import { SimpleAuthService } from './simple-auth.service';

describe('SimpleAuthService', () => {
  let service: SimpleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
