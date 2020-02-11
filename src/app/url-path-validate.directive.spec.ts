import { UrlPathValidateDirective } from './url-path-validate.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: `
    <input appUrlPathValidate [(ngModel)]="temp"/>
  `
})
class TestComponent {
  temp: string;

  constructor() { }
}

describe('UrlPathValidateDirective', () => {

  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        UrlPathValidateDirective
      ],
      imports: [ FormsModule ]
    });

    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(TestComponent).toBeDefined();
  })

  it('should create an instance', () => {
    const directive = new UrlPathValidateDirective(null);
    expect(directive).toBeTruthy();
  });

  // The idea of this test is to see if the inputed value
  it('should only allow certain input on a keypress', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const inputEl: HTMLInputElement = debugEl.querySelector('input');

    let keyEvent: KeyboardEvent = dispatchKeyDownEvent(inputEl, 'a');
    expect(keyEvent.defaultPrevented).toBeFalsy();

    keyEvent = dispatchKeyDownEvent(inputEl, '?');
    expect(keyEvent.defaultPrevented).toBeTruthy();

    keyEvent = dispatchKeyDownEvent(inputEl, '/');
    expect(keyEvent.defaultPrevented).toBeFalsy();

    keyEvent = dispatchKeyDownEvent(inputEl, ' ');
    expect(keyEvent.defaultPrevented).toBeTruthy();

    keyEvent = dispatchKeyDownEvent(inputEl, '.');
    expect(keyEvent.defaultPrevented).toBeFalsy();
  });

  xit('should only allow valid, URL path strings to be input', async() => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const inputEl: HTMLInputElement = debugEl.querySelector('input');
    const goodInput: string = 'this/should/work.html';
    const badInput: string = 'this?/should!/@work.html'; 

    inputEl.value = goodInput;
    inputEl.dispatchEvent(new Event('input'));

    expect(testComponent.temp).toEqual(goodInput);

    inputEl.value = badInput;
    inputEl.dispatchEvent(new Event('input'));

    expect(testComponent.temp).toEqual(goodInput);
  });

});

function dispatchKeyDownEvent(el: HTMLElement, key: string): KeyboardEvent {
  let keyEvent: KeyboardEvent = new KeyboardEvent("keydown", { 'key': key, cancelable: true })
  el.dispatchEvent(keyEvent);
  return keyEvent;
}
