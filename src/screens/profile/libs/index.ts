import themeStore from '../../../store/themeStore';
const { setTheme } = themeStore.getState();


const ProfileScreenHelper = {

    toggleThemeMode: (setIsDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>, theme: 'light' | 'dark') => {
        setIsDarkModeEnabled((previousState) => !previousState);
        setTheme(theme === 'dark' ? 'light' : 'dark');
    },


};

export default ProfileScreenHelper;
