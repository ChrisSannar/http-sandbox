import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component', 
  template: `
    <app-header [content]="temp"></app-header>
  `
})
class TestComponent {
  private temp: string;

  constructor() {}

  setInput(text: string) {
    this.temp = text;
  }
}

fdescribe('HeaderComponent', () => {
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

  it('should get it\'s content from the parent', () => {

    expect(component.content).toBeUndefined();
    fixture.componentInstance.setInput('testing');
    fixture.detectChanges();
    expect(component.content).toBe('testing');

  });

  it('should render the content on the page', () => {
    const p: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('p');
    fixture.componentInstance.setInput('asdf');
    fixture.detectChanges();
    expect(p.innerText).toBe('asdf');
  });
});
