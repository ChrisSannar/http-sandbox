import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';

import { config } from '../../assets/config.js';

fdescribe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the default host from the config file', () => {
    expect(component.host).toBe(config.host);
  });

  it('should update the URL when getting data from child components', () => {
    const childParams = { type: 'GET', path: 'asdf/test' };
    component.paramChange(childParams);
    expect(component.urlData).toBe(config.host + childParams.path);
  });

  it('should build a request string based on data from child components', () => {
    const childParams = { type: 'GET', path: 'asdf/test' };
    component.paramChange(childParams);
    expect(component.header[0]).toContain(`${childParams.type} ${childParams.path} ${component.info.protocol}`);

  });

  it('should send the data when the send button is clicked', () => {

  });

});
