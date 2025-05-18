import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-data-binding',
  imports: [FormsModule],
  templateUrl: './app-data-binding.component.html',
  styleUrl: './app-data-binding.component.scss'
})
export class AppDataBindingComponent {

  topic: string = " Data Binding";

  type1: string = "Interpolation";

  topicdefination: string = "Data flows from .ts file to html ";

  type2: string = "Property Binding";

  propertyDefination: string = "data is binid on html file with [] on values side";

  image: string = "https://yt3.googleusercontent.com/vDRk9yJj6aeYBq_1fa66x-QayYqsW3XS6xG-yFVODBQyEFVY5YigauGG8ibCgALGoYvdvWek7hk=s160-c-k-c0x00ffffff-no-rj";

  eventDefination: string = "In Event Binding Data flows from html to ts"

  random: string= "";

  onClick() {

     alert("Successfully Implemented Event Binding");

  }

  onChange() {
    alert("Country has changes successfully")
  }
}
