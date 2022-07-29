import { Pipe, PipeTransform } from '@angular/core';
import Item from '../models/Item.response';

@Pipe({
  name: 'sortPipe',
})
export default class SortPipePipe implements PipeTransform {
  transform(value: Item[], args: string): Item[] {
    return value.sort(
      (elem1, elem2) =>
        +elem2.statistics.viewCount - +elem1.statistics.viewCount
    );
  }
}
