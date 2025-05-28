import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppDataBindingComponent } from './app-data-binding/app-data-binding.component';
import { StructuralDirectiveNgSwitchVsSwitchComponent } from './structural-directive-ng-switch-vs-switch/structural-directive-ng-switch-vs-switch.component';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [

    //default routes

    // {
    //     path:'',
    //     component: UserComponent
    // },

    {
        path: '', 
        redirectTo: 'user',
        pathMatch: 'full'

    },

    //noraml route
    {
        path:  'user',
        component: UserComponent
    },

    {
        path: 'data-binding',
        component: AppDataBindingComponent
    },

    {
        path: 'structural-directive',
        component: StructuralDirectiveNgSwitchVsSwitchComponent
    },

    {
        path: 'attribute-directive',
        component: AttributesDirectivesComponent
    }, 

    {
        path: 'built-in-pipes',
        component: BuiltInPipesComponent

    },

    {
        path: 'tdf',
        component: TemplateDrivenFormComponent
    },


    //wild card routes
    {

        path: '**',
        component: PageNotFoundComponent
    }
];
