import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/gallery/products/product.service';
import { productInterface } from '../../../shared/interfaces/product';
import { ProductComponent } from "../../../shared/components/product/product/product.component";
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { SortAZPipe } from '../../../shared/pipes/sortAZ/sort-az.pipe';




@Component({
  selector: 'app-products',
  imports: [ProductComponent, FormsModule , SearchPipe , SortAZPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  private productService : ProductService = inject(ProductService);

  allProducts : productInterface[] = [];

  Array = Array;

  searchVal : string ="";

  ngOnInit(): void {

    this.getAllProducts()
    

  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next : (res) =>{
        this.allProducts = res;
        console.log(this.allProducts);
      },

      error : (err) =>{
        console.log(err);
      }
    });
  }



}
