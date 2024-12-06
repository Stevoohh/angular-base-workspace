import { TestBed } from '@angular/core/testing';

import { AngularBaseService } from './angular-base.service';

describe('AngularBaseService', () => {
  let service: AngularBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
