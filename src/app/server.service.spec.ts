import { TestBed } from '@angular/core/testing';

import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should connect to the server when it starts up', () => {

  });

  it('should send data via http to the backend server', () => {

  });

  it('should get responses from the backend server', () => {

  });
});
