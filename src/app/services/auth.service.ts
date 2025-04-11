import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api:HttpClient) {}

  apiUrl:string = `http://localhost:3000`

  // Khai báo hàm đăng ký
  register(data:any): Observable<object> {
    return this.api.post(this.apiUrl + `/register`, data);
  }

  // Khai báo hàm đăng nhập
  login(data:any): Observable<object> {
    return this.api.post(this.apiUrl + `/login`, data);
  }
}