import themeStore from '../../store/themeStore';

// Get current theme from theme store
const { theme } = themeStore.getState();

// Color constants used across both themes
const baseColors = {
  transparent: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
  red: '#dc3545',  // Red color for danger
  grey: '#333',  // Dark grey
  black: '#000000',  // Pure black
  white: '#ffffff',  // Pure white
  primaryBlue: '#001EB9',  // Primary blue color
  lightGrey: '#f8f9fa',  // Light grey background
  primaryButton: '#7B61FF',  // Primary button purple
  appBackground: '#008000', // Dark green background
  appHilight: '#FF7F00', // Dark orange background
  linkColor: '#007BFF', // Blue for links
  border: '#ddd', // Light border grey
  activeIcon: '#ffb100', // Active icon orange
  inactiveIcon: 'rgb(235,235,228)', // Inactive icon black
};

// Light theme configuration
const lightTheme = {
  ...baseColors,
  textPrimary: '#000000',  // Primary text color (dark for light theme)
  textSecondary: '#444',   // Secondary text color (grey for light theme)
  defaultBackground: '#F6F8F9', // Light theme background color
  containerBackground: '#ffffff', // White container background
  statusBarStyle: 'dark-content',  // Dark status bar text on light theme
  textInputBackground: 'rgba(217, 217, 217,0.2)', // Light grey background for text input
  placeholderText: 'rgba(1,1,1,0.52)', // Grey placeholder text color
} as const;

// Dark theme configuration
const darkTheme = {
  ...baseColors,
  textPrimary: '#000000',  // Primary text color (dark for light theme)
  textSecondary: '#444',   // Secondary text color (grey for light theme)
  defaultBackground: '#F6F8F9', // Light theme background color
  containerBackground: '#ffffff', // White container background
  statusBarStyle: 'dark-content',  // Dark status bar text on light theme
  textInputBackground: 'rgba(217, 217, 217,0.2)', // Light grey background for text input
  placeholderText: 'rgba(1,1,1,0.52)', // Grey placeholder text color
} as const;

// Export theme based on current selection in the store
export const COLORS = theme === 'light' ? lightTheme : darkTheme;

export const getColors = (theme: 'light' | 'dark') => {
  return theme === 'light' ? lightTheme : darkTheme; // Return the correct theme
};

export const trackColor = {
  false: baseColors.switchOff,  // Light grey when switch is off
  true: baseColors.switchOn,  // Blue when switch is on
};
