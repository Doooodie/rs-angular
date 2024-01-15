import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'appFilterResults',
  standalone: true,
})
export class FilterResultsPipe implements PipeTransform {
  transform(items: SearchItem[], query: string) {
    if (!query) return items;

    const result = [];

    const filtered = items.filter((item) => {
      return item.snippet.title.toLowerCase().includes(query) && item;
    });

    result.push(...filtered);

    return result;
  }
}
