import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import SearchFilter from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  title = 'youtube-angular';

  searchFilter: SearchFilter = {
    byDate: null,
    byCount: null,
    byWord: '',
  };

  filterByDate(): void {
    this.searchFilter.byCount = null;
    if (this.searchFilter.byDate !== null) {
      this.searchFilter.byDate = !this.searchFilter.byDate;
      return;
    }
    this.searchFilter.byDate = true;
  }

  filterByCount(): void {
    this.searchFilter.byDate = null;
    if (this.searchFilter.byCount !== null) {
      this.searchFilter.byCount = !this.searchFilter.byCount;
      return;
    }
    this.searchFilter.byCount = true;
  }

  filterByWord(inputValue: string): void {
    this.searchFilter.byWord = inputValue;
  }

  isSearchLoaded: boolean = false;

  isFilterOn: boolean = false;

  searchItem() {
    this.isSearchLoaded = true;
  }

  changeFilterState() {
    this.isFilterOn = !this.isFilterOn;
  }

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'search_settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/search_settings.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'login',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/login.svg'),
    );

    this.matIconRegistry.addSvgIcon(
      'viewed',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/viewed.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'liked',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/liked.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'dislike',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/dislike.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'comments',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/comments.svg'),
    );
  }

  ngOnInit() {
    this.isFilterOn = false;
  }
}
