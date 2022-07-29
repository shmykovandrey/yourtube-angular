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
    byDate: 'down',
    byCount: 'none',
    byWord: '',
  };

  filterByDate(): void {
    if (this.searchFilter.byDate === 'none') {
      this.searchFilter.byDate = 'up';
      return;
    }
    if (this.searchFilter.byDate === 'up') {
      this.searchFilter.byDate = 'down';
      return;
    }
    if (this.searchFilter.byDate === 'down') {
      this.searchFilter.byDate = 'none';
    }
  }

  isSearchLoaded: boolean = false;

  isFilterOn: boolean = false;

  searchItem() {
    console.log('search_click');
    this.isSearchLoaded = true;
  }

  changeFilterState() {
    console.log('parents');
    this.isFilterOn = !this.isFilterOn;
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'search_settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/search_settings.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'login',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/login.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'viewed',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/viewed.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'liked',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/liked.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'dislike',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/dislike.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'comments',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/comments.svg')
    );
  }

  ngOnInit() {
    this.isFilterOn = false;
  }
}
