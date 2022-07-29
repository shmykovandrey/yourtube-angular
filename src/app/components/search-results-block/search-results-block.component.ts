import { Component, Input, OnInit } from '@angular/core';
import mochResponse from 'src/app/moch-response';
import SearchFilter from 'src/app/models/interfaces';
import Item from 'src/app/models/Item.response';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnInit {
  @Input() isSearchLoaded: boolean = false;

  @Input() searchFilter: SearchFilter | null = null;

  items: Item[] = mochResponse.items;

  sortFilter = 'byLikes';

  ngOnInit() {
    console.log(this.searchFilter);
    console.log(this.searchFilter?.byDate);
    if (this.searchFilter) this.searchFilter.byDate += 1;
    console.log(this.searchFilter?.byDate);
  }
}
