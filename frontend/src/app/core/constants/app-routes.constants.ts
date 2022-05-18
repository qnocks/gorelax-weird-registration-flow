class Auth {
  static readonly BASE = 'auth';
  static readonly REGISTER = `register`;
  static readonly ABSOLUTE_REGISTER = `${Auth.BASE}/${Auth.REGISTER}`;
}

export class AppRoutes {
  static readonly AUTH = Auth;
}
