import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'grlx-auth-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
}
