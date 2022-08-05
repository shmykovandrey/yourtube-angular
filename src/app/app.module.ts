import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from './app.component';

import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module';
import YoutubeModule from './youtube/youtube.module';
import SharedModule from './shared/shared.module';
import PageNotFoundComponent from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
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
