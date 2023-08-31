import { TestBed } from '@angular/core/testing';

import { CurrentExoService } from './current-exo.service';

describe('CurrentExoService', () => {
  let service: CurrentExoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentExoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
