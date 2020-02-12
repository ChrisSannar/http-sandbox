import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComponent } from './response.component';
import { ServerService } from '../server.service';

describe('ResponseComponent', () => {
  let component: ResponseComponent;
  let fixture: ComponentFixture<ResponseComponent>;
  let serverService: ServerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseComponent ],
      providers: [ ServerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseComponent);
    component = fixture.componentInstance;
    serverService = TestBed.inject(ServerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to data from a service', () => {
    
  });

  it('should input service data to it\'s components', () => {

  });
});
