import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit{


  userObject: User = {}

   onSubmit(userForm:NgForm){

    console.log(userForm.value);

   }


   ngOnInit(): void {
    //  this.userObject = {
    //   firstName: 'Ram',
    //   lastName: 'Basnet',
    //   email: 'ram@yomail.com',
    //   pass: 'pass',
    //   isCheck: true
    //  }
   }


   setValue(userForm:NgForm){

    let obje = {
      firstName: 'Ram',
      lastName: 'Basnet',
      email: 'ram@yomail.com',
      pass: 'pass',
      isCheck: true

    }
    userForm.setValue(obje)
   }

  patchValue(userForm:NgForm){
  let obje = {
         firstName: 'Ram',
      lastName: 'Basnet',
      email: 'ram@yomail.com',
  }
  userForm.control.patchValue(obje)
   }



   resetValues(userForm:NgForm){
    userForm.reset();
    // userForm.resetForm();

   }
}
