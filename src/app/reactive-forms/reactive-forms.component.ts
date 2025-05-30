import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(15)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      isChecked: [false, [Validators.requiredTrue]],

      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),

      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]], // Fixed typo: was 'sill' now 'skill'
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.reactiveForm);
    }
  }

  // Helper method to mark all fields as touched for validation display
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  setValue() {
    this.reactiveForm.setValue({
      firstname: 'ram',
      lastname: 'basnet',
      email: 'ram@yopmail.com',
      password: 'test@123',
      isChecked: true,

      address: {
        city: 'ktm',
        street: 'Har har mahadev',
        pincode: '1234',
      },

      skills: [], // Include skills array for setValue
    });
  }

  resetValues() {
    this.reactiveForm.reset();
  }

  patchValue() {
    this.reactiveForm.patchValue({
      firstname: 'ram',
      lastname: 'basnet',
      address: {
        city: 'ktm',
      },
    });
  }
}
