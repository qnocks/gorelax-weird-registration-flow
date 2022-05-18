import {environment} from '../../../environments/environment';

class Auth {
  static readonly BASE = 'auth';
  static readonly REGISTER = `${environment.baseApiUrl}/${Auth.BASE}/register`;
}

export class ApiEndpoints {
  static readonly AUTH = Auth;
}
