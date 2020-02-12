import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component', 
  template: `
    <app-header [fields]="temp"></app-header>
  `
})
class TestComponent {
  private temp: string[];

  constructor() {}

  setInput(text: string[]) {
    this.temp = text;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TestComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get it\'s fields from the parent', () => {

    expect(component.fields).toBeUndefined();
    const testFields = ['asdf', 'qwer', 'zxcv'];
    fixture.componentInstance.setInput(testFields);
    fixture.detectChanges();
    expect(component.fields).toBe(testFields);

  });

  it('should render the fields on the page', () => {
    const testFields = ['asdf', 'qwer', 'zxcv'];
    fixture.componentInstance.setInput(testFields);
    fixture.detectChanges();
    const fields: NodeList = fixture.debugElement.nativeElement.querySelectorAll('p.headerField');
    for (let i = 0; i < fields.length; i++) {
      let el: HTMLElement = <HTMLElement>fields[i];
      expect(el.innerText).toBe(testFields[i]);
    }
  });

});
