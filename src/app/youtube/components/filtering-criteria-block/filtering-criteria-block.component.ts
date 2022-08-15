import { Component } from '@angular/core';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export default class FilteringCriteriaBlockComponent {
  constructor(public youtube: YoutubeService) {}

  filterByDate() {
    this.youtube.filterByDate();
  }

  filterByCount() {
    this.youtube.filterByCount();
  }

  filterByWord(event: Event) {
    const target = event.target as HTMLInputElement;
    this.youtube.filterByWord(target.value);
  }
}
