import { TestBed } from '@angular/core/testing';

import { GpsService } from './gps.service';

describe('Gps.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpsService = TestBed.get(GpsService);
    expect(service).toBeTruthy();
  });
});
