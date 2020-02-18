import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  constructor(private readonly firebaseAuth: AngularFireAuth) {
    this.auth();
  }

  public auth() {
    this.firebaseAuth.user.subscribe({
      next: async (user) => {
        if (user) {
          const token = await user.getIdToken();
          this.token$.next(token);
        } else {
          this.token$.next(null);
        }
      },
      error: () => {
        this.token$.next(null);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }


  public getAccessToken(): Observable<string> {
    return this.token$.asObservable().pipe(
      filter((token: string) => token !== undefined && token != null)
    );
  }

  public logout() {
    this.firebaseAuth.auth.signOut().then(() => {
      console.log('Logged out!');
    });
  }
}
