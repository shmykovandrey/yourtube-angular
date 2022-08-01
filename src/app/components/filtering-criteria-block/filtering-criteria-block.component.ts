import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export default class FilteringCriteriaBlockComponent {
  @Input() isFilterOn: boolean | undefined;

  @Output() filterByDateEvent = new EventEmitter();

  @Output() filterByCountEvent = new EventEmitter();

  @Output() filterByWordEvent = new EventEmitter();

  filterByDate() {
    this.filterByDateEvent.emit();
  }

  filterByCount() {
    this.filterByCountEvent.emit();
  }

  filterByWord(event: any) {
    this.filterByWordEvent.emit(event.target.value);
  }
}
