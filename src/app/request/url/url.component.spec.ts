import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlComponent } from './url.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
      declarations: [ UrlComponent, HostUrlComponent ],
      imports: [ FormsModule ]
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

  it('should render the value in the input', async () => {
    const inputEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#urlInput');
    fixture.componentInstance.setInput('asdf');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(inputEl.value).toBe('asdf');
  });

  it('should update the parent component when the url changes', () => {

  });

  it('should not allow the url host to be deleted', () => {

  });

});
