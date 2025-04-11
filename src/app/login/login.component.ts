import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NzFormModule, NzInputModule, NzButtonModule, NzCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onLogin(data:any):void {
    this.auth.login(data).subscribe((res:any) => {
      const token = res?.accessToken;
      localStorage.setItem('token', token);
      if (res) {
        alert("Đăng nhập thành công!");
        this.router.navigate([''])
      }
    })
  }
}
