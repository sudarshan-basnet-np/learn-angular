import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributes-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attributes-directives.component.html',
  styleUrl: './attributes-directives.component.scss',
})
export class AttributesDirectivesComponent {
  //@case 1
  textColor: string = 'text-success'; //green color

  changeColor(color: string) {
    this.textColor = color;
  }

  //@Case 2

  isTextGreen: boolean = false;

  //@Case 3

  userClass: string = '';

  styleColor: string = 'orange';
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }

  istextOrange: boolean = false;

  customClass: any = {
    color: 'orange',
    height: '150px',
    width: '400px',
    border: '1px solid black',
  };
}
