import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    if (value.length === null) {
      return value;
    }
    return value.filter((search: any) => {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1;
    });

  }
}
