
import { AxiosResponse } from 'axios';
import { ApiMethods } from '../../constants/ApiMethods';

export interface ApplicationPropertiesProps {
  baseUrl: string | undefined
}

export interface ApiFactoryOptions {
  url: string
  method: ApiMethods
  body?: any
  authToken?: string | null
  screen?: string | boolean
}

export interface ApiFactoryResult {
  response: AxiosResponse | null
  error: any
  status: number
}



//authStore
export interface UserStoreProps {
  authToken: string | null
  setToken: (value: string | null) => void
  profile: object | null
  setProfile: (value: object | null) => void
}


//appStore
export interface AppStoreProps {
  recommended: object | null;
  setRecommended: (value: object | null) => void;
}

//themeStore
export interface ThemeStoreProps {
  theme: 'light' | 'dark';  // Restricting the theme to "light" or "dark"
  setTheme: (value: 'light' | 'dark') => void;  // Ensuring the argument passed matches the theme type
}



