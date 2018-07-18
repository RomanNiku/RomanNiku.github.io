import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {GeneralModule} from '../general/general.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GeneralModule
  ]
})

export class AuthModule {
}
