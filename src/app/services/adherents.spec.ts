import { TestBed } from '@angular/core/testing';

import { Adherents } from './adherents';

describe('Adherents', () => {
  let service: Adherents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adherents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
