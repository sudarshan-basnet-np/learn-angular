import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss',
})
export class StructuralDirectiveNgforVsForComponent {
  employees: any[] = [
    {
      empName: 'John',
      empNumber: 101,
      empEmail: 'john@gmail.com',
      empDept: 'IT',
    },
    {
      empName: 'shiva',
      empNumber: 102,
      empEmail: 'shiva@gmail.com',
      empDept: 'Software',
    },
    {
      empName: 'Bharma',
      empNumber: 103,
      empEmail: 'bharma@gmail.com',
      empDept: 'Developer',
    },
    {
      empName: 'Ganesh',
      empNumber: 104,
      empEmail: 'ganesh@gmail.com',
      empDept: 'IT',
    },
  ];

  companyList: string[] = ['f1soft', 'logicabeans', 'cartmade', 'TCS'];
}
