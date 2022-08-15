import { Pipe, PipeTransform } from '@angular/core';
import SearchFilter from '../models/interfaces';
import Item from '../models/item.response';

@Pipe({
  name: 'sortPipe',
  pure: false,
})
export default class SortPipePipe implements PipeTransform {
  transform(value: Item[], sortFilter: SearchFilter | null): Item[] {
    if (sortFilter?.byDate !== null) {
      return sortFilter?.byDate
        ? value.sort(
          (elem1, elem2) => new Date(elem1.snippet.publishedAt).valueOf()
              - new Date(elem2.snippet.publishedAt).valueOf(),
        )
        : value.sort(
          (elem1, elem2) => new Date(elem2.snippet.publishedAt).valueOf()
              - new Date(elem1.snippet.publishedAt).valueOf(),
        );
    }
    if (sortFilter?.byCount !== null) {
      return sortFilter?.byCount
        ? value.sort((elem1, elem2) => +elem1.statistics.viewCount - +elem2.statistics.viewCount)
        : value.sort((elem1, elem2) => +elem2.statistics.viewCount - +elem1.statistics.viewCount);
    }
    return value;
  }
}
