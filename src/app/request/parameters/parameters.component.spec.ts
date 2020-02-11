import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersComponent } from './parameters.component';
import { FormsModule } from '@angular/forms';

describe('ParametersComponent', () => {
  let component: ParametersComponent;
  let fixture: ComponentFixture<ParametersComponent>;
  let children: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
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

  it('should have emitChange() method called when the path value changes', async () => {
    const debug: HTMLElement = fixture.debugElement.nativeElement;
    const input: HTMLInputElement = debug.querySelector('#reqPath');
    const temp: string = 'qwer';

    input.value = temp;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    await fixture.whenStable();
    expect(component.req.path).toBe(temp);
  });

  it('should call emitChange() and have the proper req set when the type is changed', () => {
    const select: HTMLSelectElement = fixture.debugElement.nativeElement.querySelector('#reqType');
    const spy = spyOn(component, "emitChange");

    select.value = select.options[0].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
    expect(component.req.type).toBe('GET');
  });

  it('should emit an object of the request to a parent component', (done) => {
    const tempReqObj = { type: 'GET', path: 'asdf' };
    component.req = tempReqObj;
    component.paramChange.subscribe(req => {
      expect(req).toEqual(tempReqObj);
      done();
    });
    component.emitChange();
  });

});
