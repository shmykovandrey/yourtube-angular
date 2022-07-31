import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import FilteringCriteriaBlockComponent from './components/filtering-criteria-block/filtering-criteria-block.component';
import SearchResultsBlockComponent from './components/search-results-block/search-results-block.component';
import SearchResultItemComponent from './components/search-result-item/search-result-item.component';
import FormatPipePipe from './pipes/format-pipe.pipe';
import SortPipePipe from './pipes/sort-pipe.pipe';
import FilterByWordPipe from './pipes/filter-by-word.pipe';
import ColoredByDateDirective from './directives/colored-by-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FormatPipePipe,
    SortPipePipe,
    FilterByWordPipe,
    ColoredByDateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
