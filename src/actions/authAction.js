export const AUTH = 'AUTH';

export function authAction(logged, username, password) {
  return {
    type: AUTH,
    logged,
    username,
    password
  }
};
