import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './productos-routing.module';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';
import { CustomLabelDirective } from '../shared/directives/customLabel.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ProductPagesComponent
  ]
})
export class ProductosModule { }
