import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlComponent } from './url.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-url',
  template: `<app-url [urlData]="hostUrlData"></app-url>`
})
class HostUrlComponent {
  
  private hostUrlData: string;

  setInput(text: string) {
    this.hostUrlData = text;
  }
}

describe('UrlComponent', () => {
  let component: UrlComponent;
  let fixture: ComponentFixture<HostUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlComponent, HostUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostUrlComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take input from a parent component', () => {
    expect(component.urlData).toBeUndefined();

    fixture.componentInstance.setInput('testing');
    fixture.detectChanges();
    expect(component.urlData).toBe('testing');
  });

  it('should have a label', () => {
    const labelValue = fixture.nativeElement.querySelector('label').innerText;
    expect(labelValue).toBe('URL');
  });

});
