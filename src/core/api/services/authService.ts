import { apiClient } from '../apiClient';

export const loginAPI = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};
