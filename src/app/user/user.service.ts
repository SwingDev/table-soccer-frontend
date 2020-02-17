import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  public user(): Observable<User> {
    console.log('user');
    return this.http.get<User>(`${environment.apiUrl}/user`);
  }
}
