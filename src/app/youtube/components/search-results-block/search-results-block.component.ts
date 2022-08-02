import { Component, Input, OnInit } from '@angular/core';
import mochResponse from 'src/app/moch-response';
import SearchFilter from 'src/app/models/interfaces';
import Item from 'src/app/models/Item.response';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnInit {
  constructor(private youtube: YoutubeService) {}

  // @Input() isSearchLoaded: boolean = false;
  isSearchLoaded: boolean = this.youtube.isSearchLoaded;

  searchFilter: SearchFilter = this.youtube.searchFilter;

  items: Item[] = mochResponse.items;

  ngOnInit() {}
}
