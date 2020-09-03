import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: BaseService) {}

  public sendNumber(countryCode, phone) {
    const body = {
      request: 'send_sms_code',
      phone_num: phone,
      country_code: countryCode,
    };
  }

  public verifySMSCode(countryCode, phone, verificationCode) {
    const body = {
      request: 'verify_sms_code',
      phone_num: phone,
      country_code: countryCode,
      verification_code: verificationCode,
    };
  }

  public logIn(authKey) {
    const body = {
      request: 'login_with_phone',
      auth_key: authKey,
      os_type: 3,
    };
  }

  public registration(user) {
    const body = {
      request: 'register_with_phone',
      auth_key: user.auth_key,
      name: user.name,
      os_type: 3,
    };
  }

  public logout() {
    const body = {
      request: 'logout',
    };
  }

  public getOwnProfile(token?) {
    const body = {
      request: 'get_own_profile',
    };

    if (token) {
    } else {
    }
  }

  public getToken() {
    return this.apiService.getToken();
  }
}
