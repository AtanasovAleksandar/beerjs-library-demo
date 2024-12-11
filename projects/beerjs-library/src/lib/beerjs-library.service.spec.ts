import { TestBed } from '@angular/core/testing';

import { BeerjsLibraryService } from './beerjs-library.service';

describe('BeerjsLibraryService', () => {
  let service: BeerjsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerjsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
