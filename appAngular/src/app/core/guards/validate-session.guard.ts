import { CanActivateFn, CanDeactivateFn, CanMatchFn } from '@angular/router';

export const validateSessionGuard: CanActivateFn = (route, state) => {
  return true;
};