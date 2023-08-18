import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUsesResponse, User } from '../interfaces/user-reqrest.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User>{
    return this.http.get<SingleUsesResponse>(`${ this.baseUrl }/${ id }`)
    .pipe(
      map( response => response.data),
      tap(console.log)
    )
  }


}
