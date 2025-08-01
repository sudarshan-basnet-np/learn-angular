import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppDataBindingComponent } from './app-data-binding/app-data-binding.component';
import { AppDirectivesComponent } from './app-directives/app-directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgSwitchVsSwitchComponent } from './structural-directive-ng-switch-vs-switch/structural-directive-ng-switch-vs-switch.component';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component';
import { SignalComponent } from './signal/signal.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    //  UserComponent,
    // AppDataBindingComponent,
    // StructuralDirectiveNgifVsIfComponent
    //  AppDirectivesComponent,
    // //  StructuralDirectiveNgforVsForComponent,
    // StructuralDirectiveNgSwitchVsSwitchComponent,
    // AttributesDirectivesComponent,
    // SignalComponent,
    // LinkedSignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn_angular_19';
}
