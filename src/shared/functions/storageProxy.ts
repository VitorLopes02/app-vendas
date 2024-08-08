import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Erro ao salvar item no storage', error);
  }
};

export const getItemStorage = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : '';
  } catch (error) {
    console.error('Erro ao obter item do storage', error);
    return '';
  }
};

export const removeItemStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Erro ao remover item do storage', error);
  }
};
