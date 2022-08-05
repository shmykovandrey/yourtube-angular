import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultsBlockComponent from './components/search-results-block/search-results-block.component';
import SearchResultItemComponent from './components/search-result-item/search-result-item.component';
import FilteringCriteriaBlockComponent from './components/filtering-criteria-block/filtering-criteria-block.component';
import FormatPipePipe from './pipes/format-pipe.pipe';
import SortPipePipe from './pipes/sort-pipe.pipe';
import FilterByWordPipe from './pipes/filter-by-word.pipe';
import ColoredByDateDirective from './directives/colored-by-date.directive';
import SharedModule from '../shared/shared.module';
import PageNotFoundComponent from './pages/page-not-found/page-not-found.component';
import PageMainSearchResultComponent from './pages/page-main-search-result/page-main-search-result.component';

@NgModule({
  declarations: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FilteringCriteriaBlockComponent,
    FormatPipePipe,
    SortPipePipe,
    FilterByWordPipe,
    ColoredByDateDirective,
    PageNotFoundComponent,
    PageMainSearchResultComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
  ],
})
export default class YoutubeModule {}
