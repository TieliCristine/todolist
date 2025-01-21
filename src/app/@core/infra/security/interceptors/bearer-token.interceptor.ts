import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../application/services/auth.service';

export const bearerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  // const token = authService.getToken();

  // const authReq = token
  //   ? req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${ token }`
  //     }
  //   })
  //   : req;

  return next(req);
};
