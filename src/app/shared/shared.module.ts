import { NgModule } from '@angular/core';
import { CustomLabelDirective } from './directives/customLabel.directive';

@NgModule({
  declarations:[
    CustomLabelDirective
  ],
  exports:[
    CustomLabelDirective
  ]

})
export class SharedModule { }
