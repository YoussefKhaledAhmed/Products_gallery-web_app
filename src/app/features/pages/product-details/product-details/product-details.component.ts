import { ProductService } from './../../../../core/services/gallery/products/product.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInterface } from '../../../../shared/interfaces/product';



@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  private productService : ProductService = inject(ProductService);

  pId : string | null = "";
  product! : productInterface;

  ngOnInit():void{
    this.getProductId();
    this.getProductDetails(this.pId!);
  }

  getProductId(){
    this.activatedRoute.paramMap.subscribe((p)=>{
      this.pId = p.get('id');
      console.log(this.pId);
    })
  }

  getProductDetails(id : string){
    this.productService.getSpecificProduct(id).subscribe({
      next: (res)=>{
        this.product = res;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  ratingStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
  ratingGrayStars(rating: number): number[]{
    return Array(5 - (Math.round(rating))).fill(0);
  }
}
