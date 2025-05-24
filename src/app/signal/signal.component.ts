import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  
  normalCounter: number = 0;

  counter = signal(0);

  // counter : WritableSignal<number> = signal(0);

  arrayofSignal = signal([])


  constructor(){
    this.counter.set(5)
    // setTimeout(
    //   () => {
    //     // this.normalCounter = 50;
    //     // console.log("Normal conunter value " + this.normalCounter)

    //     this.counter.set(10);
    //     console.log("Signal counter value" + this.counter())
    //   }, 5000
    // )

    //To activated this things you need to pass signal on it.
    effect( () => console.log("The value of counter is :" + this.counter()));
    
  }


   onIncrement() {
    this.counter.update(a => a + 1);
   }



}

