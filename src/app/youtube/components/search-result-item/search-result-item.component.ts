import { Component, Input } from '@angular/core';
import Item from 'src/app/models/Item.response';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent {
  constructor(private youtube: YoutubeService) {}

  @Input() item: Item | null = null;

  moreClick(): void {}
}
