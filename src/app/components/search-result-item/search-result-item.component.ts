import { Component, Input, OnInit } from '@angular/core';
import Item from 'src/app/models/Item.response';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent implements OnInit {
  @Input() item: Item | null = null;

  ngOnInit() {
    // if (this.item?.statistics.viewCount) {
    //   if ((parseInt(this.item?.statistics.viewCount, 10) as number) > 10000) {
    //     this.item.statistics.viewCount = Math.trunc(
    //       parseInt(this.item.statistics.viewCount, 10) / 1000
    //     ).toString();
    //     this.item.statistics.viewCount += 'k';
    //   }
    // }
  }
}
