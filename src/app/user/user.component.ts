import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    OnInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name: string = 'ram';

  password: string = 'password';

  inputName: string = '';

  inputPassword: string = '';

  topic: any;

  constructor(private router: Router) {
    this.topic = 'Angular 19';
    console.log('Constructor called ');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //use for components input property
    console.log('1. ngOnChnaged called.');
  }

  ngOnInit(): void {
    // call api here
    //use for API call
    console.log('2. ngOnInit called');
  }

  ngDoCheck(): void {
    //use for every change detection
    console.log('3. ngDocheck called');
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    //use for ng-content
    console.log('5. ngAfter content checked');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('7 ngAfter view checked called');
  }

  ngOnDestroy(): void {
    console.log('8 ngAfter destory');
  }

  loginData() {
    if (this.inputName === this.name && this.inputPassword === this.password) {
      this.router.navigateByUrl('/data-binding');
    } else {
      this.router.navigate(['structural-directive']);
    }
  }
}
