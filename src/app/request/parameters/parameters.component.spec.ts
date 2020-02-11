import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersComponent } from './parameters.component';

fdescribe('ParametersComponent', () => {
  let component: ParametersComponent;
  let fixture: ComponentFixture<ParametersComponent>;
  let children: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    children = fixture.nativeElement.querySelectorAll('.param');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have several parameters', () => {
    expect(children.length).toBeGreaterThan(0);
  });

  it('should have each parameter contain a label', () => {
    children.forEach(element => {
      let labelElement = element.querySelector('label');
      expect(labelElement).toBeTruthy();
    });
  });

});
