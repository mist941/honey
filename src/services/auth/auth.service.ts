import {AuthProviders} from "./auth.providers";
import {EmailAuth, FacebookAuth, GoogleAuth} from "./auth.strategy";

export class AuthService {

  loginStrategy(provider?: AuthProviders | string) {
    switch (provider) {
      case AuthProviders.FACEBOOK: return new FacebookAuth();
      case AuthProviders.GOOGLE: return new GoogleAuth();
      case AuthProviders.EMAIL:
      default: return new EmailAuth();
    }
  }
}