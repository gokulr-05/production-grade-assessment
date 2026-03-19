export const loginAPI = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email === 'admin@test.com' && password === '123456') {
    return {
      user: {
        id: '1',
        email,
        role: 'admin',
      },
      accessToken: 'mock-jwt-token',
    };
  }

  throw new Error('Invalid credentials');
};
