import { TestBed } from '@angular/core/testing';

import { BankAppService } from './bank-app.service';

describe('BankAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAppService = TestBed.get(BankAppService);
    expect(service).toBeTruthy();
  });
});
