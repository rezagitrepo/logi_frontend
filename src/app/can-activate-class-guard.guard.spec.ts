import { TestBed } from '@angular/core/testing';

import { CanActivateClassGuardGuard } from './can-activate-class-guard.guard';

describe('CanActivateClassGuardGuard', () => {
  let guard: CanActivateClassGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateClassGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
