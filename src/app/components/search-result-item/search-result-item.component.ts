import { Component, Input, OnInit } from '@angular/core';
import Item from 'src/app/models/Item.response';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent implements OnInit {
  @Input() item: Item | null;

  ngOnInit() {
    this.item = item;
  }
}
