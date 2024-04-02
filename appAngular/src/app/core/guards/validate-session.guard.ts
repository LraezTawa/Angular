import { CanActivateFn, CanDeactivateFn, CanMatchFn } from '@angular/router';

export const validateSessionGuard: CanActivateFn = (route, state) => {
  return true;
};

export const validateSessionGuard2: CanMatchFn = (route, state) => {
  return false;
};