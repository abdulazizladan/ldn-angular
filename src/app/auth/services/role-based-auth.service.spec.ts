import { TestBed } from '@angular/core/testing';

import { RoleBasedAuthService } from './role-based-auth.service';

describe('RoleBasedAuthService', () => {
  let service: RoleBasedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleBasedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
