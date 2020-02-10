import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { UrlComponent } from './request/url/url.component';
import { ParametersComponent } from './request/parameters/parameters.component';
import { DataComponent } from './response/data/data.component';
import { ResponseHeaderComponent } from './response/response-header/response-header.component';
import { RequestHeaderComponent } from './request/request-header/request-header.component';
import { UrlPathValidateDirective } from './url-path-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ResponseComponent,
    UrlComponent,
    ParametersComponent,
    DataComponent,
    ResponseHeaderComponent,
    RequestHeaderComponent,
    UrlPathValidateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
