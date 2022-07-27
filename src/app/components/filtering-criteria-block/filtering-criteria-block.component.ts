import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export default class FilteringCriteriaBlockComponent {
  @Input() isFilterOn: boolean | undefined;
}
