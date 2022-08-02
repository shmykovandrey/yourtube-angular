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
import YoutubeService from './services/youtube.service';

@NgModule({
  declarations: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FilteringCriteriaBlockComponent,
    FormatPipePipe,
    SortPipePipe,
    FilterByWordPipe,
    ColoredByDateDirective,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
  ],
})
export default class YoutubeModule {}
