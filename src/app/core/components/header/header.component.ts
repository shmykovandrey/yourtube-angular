import { Component, Output, EventEmitter } from '@angular/core';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(private router: Router, private youtube: YoutubeService) {}

  @Output() changeFilterEvent = new EventEmitter();

  searchClick(): void {
    this.youtube.searchItem();
  }

  changeFilterStateChild(): void {
    this.youtube.changeFilterState();
  }

  inputValue?: string;

  onClick(): void {}

  loginClick(): void {
    this.router.navigate(['/login']);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
  }
}
