import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthLayoutComponent} from './auth-layout.component';
import {RegisterPageModule} from './register-page/register-page.module';
import {AppRoutes} from '../../../core/constants/app-routes.constants';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutes.AUTH.REGISTER,
        pathMatch: 'full',
      },
      {
        path: AppRoutes.AUTH.REGISTER,
        loadChildren: (): Promise<RegisterPageModule> =>
          import('src/app/layouts/auth/pages/register-page/register-page.module').then((m) => m.RegisterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule {
}
