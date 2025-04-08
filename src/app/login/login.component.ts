import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
