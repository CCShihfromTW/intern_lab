import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterceptorService } from './@services/interceptor.service';
import { ErrorhandleService } from './@services/errorhandle.service';

/*
# Root Module
Module will not be automatically applied to all its child components.
*/
@NgModule({
  // 註冊底下的component
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  // 載入外部module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // 在這註冊service以使用它
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  // 將component或module提供給其他component使用
  exports: [],
  // 來源:BrowserModule, 將bootstrap載入app.component.html
  bootstrap: [AppComponent]
})
export class AppModule { }
