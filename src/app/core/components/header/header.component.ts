import { Component, Output, EventEmitter } from '@angular/core';
import YoutubeService from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(private youtube: YoutubeService) {}

  @Output() changeFilterEvent = new EventEmitter();

  searchClick(): void {
    this.youtube.searchItem();
  }

  changeFilterStateChild(): void {
    this.youtube.changeFilterState();
  }

  inputValue?: string;

  onClick(): void {
    // @Output() isFilterOn = true;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
  }
}
