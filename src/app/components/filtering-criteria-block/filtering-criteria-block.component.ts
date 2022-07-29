import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export default class FilteringCriteriaBlockComponent {
  @Input() isFilterOn: boolean | undefined;

  @Output() filterByDateEvent = new EventEmitter();

  filterByDate() {
    this.filterByDateEvent.emit();
  }
}
