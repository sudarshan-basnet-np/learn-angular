import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppDirectivesComponent } from "../app-directives/app-directives.component";
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {

  angularPipes: string = "use pipes to format data in angualar templates";


  personData: any = {
    name: 'John',
    age: 30,
    address: 'ktm'
  }

  currrentDate : Date = new Date();

  items = of( ['Apple', 'Mango', 'Banana', 'Litichi'])

}
