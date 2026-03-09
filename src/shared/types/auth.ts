export type UserRole = 'student' | 'teacher' | 'admin' | 'superAdmin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
}
