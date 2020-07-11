import { TestBed } from '@angular/core/testing';

import { FlatListService } from './flat-list.service';

describe('FlatListService', () => {
  let service: FlatListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
