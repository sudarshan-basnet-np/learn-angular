import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {


  qualitySignal = signal(1);

  price = 10;

  //computed signal

  // total = computed( () => {
  //   return this.qualitySignal() * this.price;
  // })


  // total = linkedSignal(  () => {
  //   return this.qualitySignal() * this.price;
  // }

  // )

  // linked singal wiht source and computation -> developer preview
  total = linkedSignal ( {
    source: this.qualitySignal,
    computation: () => this.qualitySignal() * this.price,
    equal: (a: any, b: any) =>  a === b
  }
  )



  calculate() {
    this.qualitySignal.set(2);
  }

}
