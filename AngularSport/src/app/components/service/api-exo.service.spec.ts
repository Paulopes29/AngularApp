import { TestBed } from '@angular/core/testing';

import { ApiExoService } from './api-exo.service';

describe('ApiExoService', () => {
  let service: ApiExoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
