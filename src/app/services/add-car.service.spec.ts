import { TestBed, inject } from '@angular/core/testing';

import { AddCarService } from './add-car.service';

describe('AddCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCarService]
    });
  });

  it('should be created', inject([AddCarService], (service: AddCarService) => {
    expect(service).toBeTruthy();
  }));
});
