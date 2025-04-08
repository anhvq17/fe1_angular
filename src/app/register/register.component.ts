import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,  
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
