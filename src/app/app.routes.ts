import { Routes } from '@angular/router';
import { ProductsComponent } from './features/pages/products/products.component';
import { NotFoundComponent } from './features/layout/not-found/not-found.component';
import { ProductDetailsComponent } from './features/pages/product-details/product-details/product-details.component';

export const routes: Routes = [
    {path:'' , redirectTo: 'products' , pathMatch:'full'},
    {path:'products' , component: ProductsComponent , title:'products'},
    {path:'productDetails/:id' , component: ProductDetailsComponent , title:'product details'},
    {path:'**' , component: NotFoundComponent , title: 'not found'}
];
