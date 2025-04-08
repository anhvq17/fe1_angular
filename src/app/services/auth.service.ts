import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api:HttpClient) {}

  apiUrl:string = `http://localhost:3000`

  // Đăng ký
  register(data:any):Observable<object> {
    return this.api.post(this.apiUrl + `/register`, data);
  }

  // Đăng nhập
  login(data:any):Observable<object> {
    return this.api.post(this.apiUrl + `/login`, data);
  }
}
