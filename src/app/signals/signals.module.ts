import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page/counter-page.component';
import { InfoUserPagesComponent } from './pages/user-info-page/info-user-pages/info-user-pages.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    SignalsRoutingModule,

  ],
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    InfoUserPagesComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ]
})
export class SignalsModule { }
