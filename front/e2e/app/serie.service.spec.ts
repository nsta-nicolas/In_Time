import { TestBed, inject } from '@angular/core/testing';

import { SerieService } from './serie.service';

describe('SerieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieService]
    });
  });

  it('should be created', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
