import { TestBed } from '@angular/core/testing';

import { PlantOperationService } from './plant-operation.service';

describe('PlantOperationService', () => {
  let service: PlantOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
