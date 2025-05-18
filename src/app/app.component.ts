import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { AppDataBindingComponent } from './app-data-binding/app-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent,  AppDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn_angular_19';
}
