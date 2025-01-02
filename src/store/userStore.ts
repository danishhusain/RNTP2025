import { create } from 'zustand';
import { UserStoreProps } from '../interface/interface/Common';



const userStore = create<UserStoreProps>((set) => ({
  authToken: null,
  setToken: (value) => set({ authToken: value }),
  profile: null,
  setProfile: (value: object | null) => set({ profile: value }),

}));

export default userStore;




// import { create } from 'zustand';
// import { UserStoreProps } from '../interface/interface/Common';

// // Define the initial state for scalability and easy resets
// const initialState: UserStoreProps = {
//   authToken: null,
//   profile: null,
//   setToken: function (value: string | null): void {
//     throw new Error('Function not implemented.');
//   },
//   setProfile: function (value: object | null): void {
//     throw new Error('Function not implemented.');
//   },
// };

// const userStore = create<UserStoreProps & {

//   setToken: (value: string | null) => void;
//   setProfile: (value: object | null) => void;
//   reset: () => void;
// }>((set) => ({
//   ...initialState,
//   setToken: (value) => set({ authToken: value }),
//   setProfile: (value) => set({ profile: value }),
//   reset: () => set(initialState),
// }));

// export default userStore;
