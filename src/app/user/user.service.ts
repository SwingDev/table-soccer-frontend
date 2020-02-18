import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private me$: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
  ) {
    this.refreshUser();
  }

  public refreshUser() {
    this.authService.getAccessToken().pipe(
      switchMap(() => {
        return this.requestMe();
      })
    ).subscribe({
      next: async (user) => {
        this.me$.next(user);
      },
      error: () => {
        this.me$.next(null);
      }
    });
  }

  public requestMe(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/me`);
  }

  public users(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`);
  }

  public me(): Observable<User> {
    return this.me$.asObservable().pipe(
      filter((user: User) => user !== undefined && user != null)
    );
  }
}
