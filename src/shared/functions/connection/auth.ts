import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = async (): Promise<void> => {
  await removeItemStorage(AUTHORIZATION_KEY);
};

export const setAuthorizationToken = async (token: string): Promise<void> => {
  if (!token) {
    throw new Error('Token inválido: não pode ser null ou undefined');
  }
  await setItemStorage(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = async (): Promise<string> => {
  return await getItemStorage(AUTHORIZATION_KEY);
};
