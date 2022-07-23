import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { FilmsContainerComponent } from './components/films-container/films-container.component';
import { FilmCardComponent } from './components/film-card/film-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HeaderFilterComponent,
    HeaderUserComponent,
    FilmsContainerComponent,
    FilmCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
