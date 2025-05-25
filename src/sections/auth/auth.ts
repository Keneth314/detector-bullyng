import { users } from 'src/_mock';

export function Auth(username: string, password: string) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }
  return false;
}

export function isAuthenticated() {
  return localStorage.getItem('user') !== null;
}

export function logout() {
  localStorage.removeItem('user');
}
