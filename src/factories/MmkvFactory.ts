import { MMKVLoader } from 'react-native-mmkv-storage';

const mmkvLoader = new MMKVLoader();
const LocalStorage = mmkvLoader.initialize();

export default LocalStorage;
