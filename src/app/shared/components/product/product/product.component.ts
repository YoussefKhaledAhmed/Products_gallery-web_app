import { Component, inject, Input } from '@angular/core';
import { productInterface } from '../../../interfaces/product';
import { RouterLink } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product !: productInterface;
  // private toastrService = inject(ToastrService);

  ratingStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
  ratingGrayStars(rating: number): number[]{
    return Array(5 - (Math.round(rating))).fill(0);
  }
}
