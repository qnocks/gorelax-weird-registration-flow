import {Injectable} from '@angular/core';
import {BaseApiService} from '../../../core/services/base-api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiEndpoints} from '../../../core/constants/api-endpoints.constants';
import {RegisterRequest} from '../models/register-request';

@Injectable()
export class AuthService extends BaseApiService {

  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
  }

  register(request: RegisterRequest): Observable<void> {
    return super.post(ApiEndpoints.AUTH.REGISTER, request);
  }
}
