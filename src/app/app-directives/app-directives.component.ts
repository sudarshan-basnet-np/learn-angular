import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-directives',
  //NgIf -> component Directives ( used for template , must used directives)
  imports: [AppDirectivesComponent, NgIf],
  templateUrl: './app-directives.component.html',
  styleUrl: './app-directives.component.scss'
})
export class AppDirectivesComponent {

  // Structural directives  -> change the apperance and behaviour of element, component, and other directives

  // *ngIf -> is used for boolean

  // *ngFor -> is used for forloop

  // *ngSwitch -> if muliple switch statment -> Based on DOM



  //Attribute DOM

  //Changing DOM layout by adding and removing elements

  //ngClass -> add and remove css

  //ngStyle -> Add and remove NgStype

  //ngModel -> two way databinding 

}


// Install Bootstrap

// npm i bootstrap

// Go to node modules -> bootstrap -> dist -> css ->  /home/sudarshan/angular/learn_angular_19/node_modules/bootstrap/dist/css/bootstrap.min.css
// Go to node modules -> bootstrap -> dist -> js -> /home/sudarshan/angular/learn_angular_19/node_modules/bootstrap/dist/js/bootstrap.min.js

 
// Add this to sytle[array node_modules/bootstrap/dist/css/bootstrap.min.css] and script[arraym node_modules/bootstrap/dist/js/bootstrap.min.js]