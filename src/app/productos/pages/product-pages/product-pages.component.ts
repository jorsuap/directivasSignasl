import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent {

  private fb = inject( FormBuilder );//forma de injectar nueva parqa Signals

  public color:string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['',[ Validators.required, Validators.minLength(6), Validators.email]]
  })

  changeColor(){
    //crea un hexadecimal nuevo
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
