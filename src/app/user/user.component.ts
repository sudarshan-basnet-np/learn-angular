import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  name: string= 'ram';

  password: string = 'password';

  inputName: string= '';

  inputPassword: string= '';


  constructor(private router : Router) {

  }

 loginData() {
    if (this.inputName === this.name && this.inputPassword === this.password) {
      this.router.navigateByUrl('/data-binding');
    } else {
      this.router.navigate(['structural-directive']);
    }

  }

}
