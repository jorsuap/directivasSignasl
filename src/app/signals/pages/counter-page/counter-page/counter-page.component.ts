import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed(()=> this.counter() * this.counter()); // Solo lectura

  increaseBy(value: number){
     this.counter.update(current => current + value)
  }

}
