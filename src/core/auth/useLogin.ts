import { useMutation } from '@tanstack/react-query';
import { loginAPI } from '../../core/api/services/authService';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      loginAPI(email, password),
  });
};
