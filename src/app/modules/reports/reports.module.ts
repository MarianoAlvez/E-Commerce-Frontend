import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ProductByBrandComponent } from './product-by-brand/product-by-brand.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';


@NgModule({
  declarations: [
    ProductByBrandComponent,
    ProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
