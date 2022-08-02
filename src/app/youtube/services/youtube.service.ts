import { Injectable, EventEmitter, ChangeDetectorRef } from '@angular/core';
import SearchFilter from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  test = 'testService';

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
    console.log('search start');
    console.log(this.isSearchLoaded);
    this.isSearchLoaded = true;
    changeDetecrion = new ChangeDetectorRef();
    console.log(this.isSearchLoaded);
  }

  changeFilterState() {
    console.log(`filter change ${this.isFilterOn}`);
    this.isFilterOn = !this.isFilterOn;
  }
}
