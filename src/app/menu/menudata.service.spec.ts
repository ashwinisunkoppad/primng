import { TestBed } from '@angular/core/testing';

import { MenudataService } from './menudata.service';

describe('MenudataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenudataService = TestBed.get(MenudataService);
    expect(service).toBeTruthy();
  });
});
