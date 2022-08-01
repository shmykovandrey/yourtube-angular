import { Pipe, PipeTransform } from '@angular/core';
import Item from '../../models/Item.response';
import SearchFilter from '../../models/interfaces';

@Pipe({
  name: 'filterByWord',
  pure: false,
})
export default class FilterByWordPipe implements PipeTransform {
  transform(value: Item[], sortFilter: SearchFilter): Item[] {
    if (sortFilter.byWord) {
      return value.filter((elem) => elem.snippet.title.toLowerCase().includes(sortFilter.byWord));
    }
    return value;
  }
}
