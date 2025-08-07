import { MMKV } from "react-native-mmkv";

export const tokenStorage = new MMKV({
  id: "token-storage",
  encryptionKey: "some-secret-key",
});

export const storage = new MMKV({
  id: "my-app-storage",
  encryptionKey: "some-secret-key",
});

export const mmkvStorage = {
  setItem: (key: string, value: string | number) => {
    storage.set(key, value);
  },
  getItem: (key: string): string | null => {
    return storage.getString(key) ?? null;
  },
  getNumber: (key: string): number | null => {
    const val = storage.getNumber(key);
    return val ?? null;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

