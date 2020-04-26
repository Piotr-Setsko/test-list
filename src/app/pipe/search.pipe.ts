import { Pipe, PipeTransform } from '@angular/core';
import { DataListItems } from '../models/list.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: DataListItems[], field: string): DataListItems[]  {
    if (!items) { return []; }

    if (field !== undefined) {
      items = items.filter(item => {
        if (item.name.toLowerCase().includes(field)) {
          return item;
        }
      });
    }
    return items;
  }

}
