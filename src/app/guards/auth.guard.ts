import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  // Lấy token từ trong localStorage
  let valid = false;
  const token = localStorage.getItem('token');
  // Nếu có token => trả về true => cho truy cập
  if (token) {
    const info = jwtDecode(token);
    if (info?.exp as any > Date.now()/1000) {
      valid = true;
    }
  }
  // Ngược lại => trả về false => đưa người dùng về trang login
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};
