import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';
import SearchFilter from '../models/interfaces';
import Item from '../models/Item.response';

@Pipe({
  name: 'sortPipe',
  pure: false,
})
export default class SortPipePipe implements PipeTransform {
  transform(value: Item[], sortFilter: SearchFilter | null): Item[] {
    console.log('-------------');
    value.forEach((elem) => console.log(elem.snippet.publishedAt));
    if (sortFilter?.byCount === 'none') {
      if (sortFilter.byDate === 'none') return value;
      if (sortFilter.byDate === 'down') {
        return value.sort(
          (elem1, elem2) =>
            new Date(elem1.snippet.publishedAt).valueOf() -
            new Date(elem2.snippet.publishedAt).valueOf()
        );
      }
      if (sortFilter.byDate === 'up') {
        return value.sort(
          (elem1, elem2) =>
            new Date(elem2.snippet.publishedAt).valueOf() -
            new Date(elem1.snippet.publishedAt).valueOf()
        );
      }
    }
    // console.log(new Date(value[0].snippet.publishedAt).valueOf());
    return value.sort(
      (elem1, elem2) =>
        +elem2.statistics.viewCount - +elem1.statistics.viewCount
    );
  }
}
