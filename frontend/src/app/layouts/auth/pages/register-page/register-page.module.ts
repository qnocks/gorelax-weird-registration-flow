import {NgModule} from '@angular/core';
import {RegisterPageComponent} from './register-page.component';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: RegisterPageComponent}]),
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule {
}
