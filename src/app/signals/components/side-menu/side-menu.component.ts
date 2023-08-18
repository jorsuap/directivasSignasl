import { Component, OnInit, signal } from '@angular/core';

interface MenuItem {
  title:string;
  router: string;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', router: 'counter'},
  //   { title: 'Usuario', router: 'user-info'},
  //   { title: 'Mutaciones', router: 'properties'},
  // ]
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter'},
    { title: 'Usuario', router: 'user-info'},
    { title: 'Mutaciones', router: 'properties'},
  ]);

  constructor() { }

  ngOnInit() {
  }

  //Una señal es un espacio en memoria que sabe donde se esta usando // programacion reactiva

}
