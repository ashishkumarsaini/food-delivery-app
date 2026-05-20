import * as SecureStore from 'expo-secure-store';

export async function saveValueToStorage<T>(key: string, value: T) {
  await SecureStore.setItemAsync(key.replace('@', '-'), JSON.stringify(value));
}

export async function getValueFromStorage<T>(key: string) {
  let result = await SecureStore.getItemAsync(key.replace('@', '-'));
  if (result) {
    return JSON.parse(result) as T;
  } else {
    return null;
  }
}

export async function deleteValueFromStorage(key: string) {
  await SecureStore.deleteItemAsync(key);
}