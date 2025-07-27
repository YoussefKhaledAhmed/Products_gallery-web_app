import { Pipe, PipeTransform } from '@angular/core';
import { productInterface } from '../../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProducts : productInterface[], searchWord : string): productInterface[] {
    return allProducts.filter( element => element.title.includes(searchWord));
  }

}
