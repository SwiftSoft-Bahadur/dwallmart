import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a:any,b:any) => (a.role > b.role) ? 1 : ((b.role > a.role) ? -1 : 0));
  }

}
