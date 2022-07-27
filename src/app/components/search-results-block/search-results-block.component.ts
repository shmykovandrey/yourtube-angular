import { Component } from '@angular/core';
import mochResponse from 'src/app/moch-response';
import Item from 'src/app/models/Item.response';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent {
  items: Item[] = mochResponse.items;
}
