import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  entityName: string = 'users'
  apiUrl: string = `${environment.apiUrlBasic}/${this.entityName}`

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${user.id}`, user)
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`)
  }
}
