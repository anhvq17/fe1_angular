import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-register',
  standalone: true,  
  imports: [FormsModule, NzFormModule, NzInputModule, NzButtonModule, NzCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  onRegister(data:any):void {
    this.auth.register(data).subscribe(res => {
      if (res) {
        alert("Đăng ký thành công!");
        this.router.navigate([`/login`])
      }
    })
  }
}
