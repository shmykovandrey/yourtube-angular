import { Component, Input } from '@angular/core';
import mochResponse from 'src/app/youtube/models/moch-response';
import Item from '../../models/item.response';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent {
  constructor(public youtube: YoutubeService) {}

  @Input() testEvent: boolean = false;

  items: Item[] = mochResponse.items;
}
