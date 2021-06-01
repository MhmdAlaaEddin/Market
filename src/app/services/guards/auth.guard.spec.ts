import { TestBed } from '@angular/core/testing';

import { AuthGurad } from './auth.guard';

describe('AuthService', () => {
  let service: AuthGurad;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGurad);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
