import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

export const useAuthUser = () =>
  useSelector((state: RootState) => state.auth.user);

export const useAccessToken = () =>
  useSelector((state: RootState) => state.auth.accessToken);
