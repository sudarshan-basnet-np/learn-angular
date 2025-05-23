import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-switch-vs-switch.component.html',
  styleUrl: './structural-directive-ng-switch-vs-switch.component.scss'
})
export class StructuralDirectiveNgSwitchVsSwitchComponent {


  grade: number = 0;

  set(gradeNumber: number) {
    this.grade = gradeNumber;
  }

}
