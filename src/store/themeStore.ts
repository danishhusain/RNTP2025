import { create } from 'zustand';
import LocalStorage from '../factories/MmkvFactory';
import MMKVKeys from '../constants/MmkvKeys';
import { ThemeStoreProps } from '../interface/interface/Common';



const themeStore = create<ThemeStoreProps>((set) => ({
  theme: 'light',  // Initial state
  setTheme: (value: 'light' | 'dark') => {set({ theme: value }),
  LocalStorage.setString(MMKVKeys.THEMEMODE, value);
  },
}));

export default themeStore;


