import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { config } from '../assets/config';
import { ServerService } from './server.service';

fdescribe('ServerService', () => {
  let service: ServerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ServerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build a url based on the request sent in', () => {
    let request = {};
    let expectedUrl = `${ config.host }`
    expect(service.buildUrlFromRequest(request)).toBe(expectedUrl);
  });

  it('should send data via http to the backend server', () => {
    let request = {};
    service.sendServerRequest(request);

    let mock = httpMock.expectOne(service.buildUrlFromRequest(request));
    expect(mock.request.method).toBe('GET');
  });

  it('should get responses from the backend server', () => {
    let request = {};
    let response = {};

    service.sendServerRequest(request);

    service.getServerResponse().subscribe(resp => {
      expect(resp.toBe(response));
    });

    let mock = httpMock.expectOne(service.buildUrlFromRequest(request));
    expect(mock.request.method).toBe('GET');
    mock.flush(response);
  });
});
