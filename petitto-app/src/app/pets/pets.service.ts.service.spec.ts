import { TestBed } from '@angular/core/testing';

import { Pets.Service.TsService } from './pets.service.ts.service';

describe('Pets.Service.TsService', () => {
  let service: Pets.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pets.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
