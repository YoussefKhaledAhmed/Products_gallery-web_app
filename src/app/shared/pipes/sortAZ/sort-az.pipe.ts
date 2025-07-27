import { Pipe, PipeTransform } from '@angular/core';
import { productInterface } from '../../interfaces/product';

@Pipe({
  name: 'sortAZ'
})
export class SortAZPipe implements PipeTransform {

  transform(value: productInterface[] , key?: keyof productInterface, ...args: unknown[]): productInterface[] {
    if (!Array.isArray(value)) return value;

    return [...value].sort((a, b) => {
      const aValue = key ? a[key] : a;
      const bValue = key ? b[key] : b;

      return aValue.toString().localeCompare(bValue.toString());
    });
}

}
