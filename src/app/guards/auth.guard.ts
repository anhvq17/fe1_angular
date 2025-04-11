import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const info: any = jwtDecode(token);
      if (info?.exp > Date.now() / 1000) {
        return true;
      }
    } catch (e) {
      console.error('Invalid token', e);
    }
  }

  router.navigate(['/login']);
  return false;
};
