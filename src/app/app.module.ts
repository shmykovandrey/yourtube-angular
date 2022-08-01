import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from './app.component';

import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module';
import YoutubeModule from './youtube/youtube.module';
import SharedModule from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    YoutubeModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
