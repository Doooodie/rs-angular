import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'app/shared/models/search-item.model';

@Pipe({
  name: 'appFilterResults',
  standalone: true,
})
export class FilterResultsPipe implements PipeTransform {
  transform(items: SearchItem[], query: string) {
    if (!query) return items;

    return items.filter((item) => item.snippet.title.toLowerCase().includes(query.toLowerCase()));
  }
}
