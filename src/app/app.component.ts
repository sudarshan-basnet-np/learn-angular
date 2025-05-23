import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { AppDataBindingComponent } from './app-data-binding/app-data-binding.component';
import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from "./structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component";
import { StructuralDirectiveNgSwitchVsSwitchComponent } from './structural-directive-ng-switch-vs-switch/structural-directive-ng-switch-vs-switch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    //  UserComponent,  
    // AppDataBindingComponent,
    // StructuralDirectiveNgifVsIfComponent
    //  AppDirectivesComponent,
    //  StructuralDirectiveNgforVsForComponent,
    StructuralDirectiveNgSwitchVsSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn_angular_19';
}
