import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  template: `
    <app-data [respData]="temp"></app-data>
  `
})
class TestComponent {

  temp: string;

  constructor() {}

  setInput(text: string) {
    this.temp = text;
  }
}

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataComponent, TestComponent ],
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

  it('should get data from an input', () => {
    fixture.componentInstance.setInput('testing');
    fixture.detectChanges();
    console.log(component.respData);
    expect(component.respData).toBe('testing');
  })

  it('should render the data on the page', async () => {
    const el: HTMLTextAreaElement = fixture.debugElement.nativeElement.querySelector('#respData');
    
    fixture.componentInstance.setInput('testing');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(el.value).toBe('testing');
  });

});
