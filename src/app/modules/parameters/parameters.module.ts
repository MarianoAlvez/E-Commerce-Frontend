import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditionComponent } from './category/category-edition/category-edition.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { RemoveCategoryComponent } from './category/remove-category/remove-category.component';
import { RemoveBrandComponent } from './brand/remove-brand/remove-brand.component';


@NgModule({
  declarations: [
    BrandCreationComponent,
    BrandEditionComponent,
    BrandListComponent,
    CategoryCreationComponent,
    CategoryEditionComponent,
    CategoryListComponent,
    RemoveCategoryComponent,
    RemoveBrandComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
