import { TestBed } from '@angular/core/testing';

import { HttpIntercepterbasicsAuthService } from './http-intercepterbasics-auth.service';

describe('HttpIntercepterbasicsAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterbasicsAuthService = TestBed.get(HttpIntercepterbasicsAuthService);
    expect(service).toBeTruthy();
  });
});
