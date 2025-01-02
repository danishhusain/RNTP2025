import { create } from 'zustand';
import { AppStoreProps } from '../interface/interface/Common';



const appStore = create<AppStoreProps>((set) => ({
  recommended: null,
  setRecommended: (value: object | null) => set({ recommended: value }), // Handle null with fallback

}));

export default appStore;
