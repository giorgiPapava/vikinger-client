import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@src/store'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export enum ThemesEnum {
  Main = 'main',
  Dark = 'dark',
}

interface ThemeState {
  currentTheme: ThemesEnum
}
const initialState: ThemeState = {
  currentTheme: ThemesEnum.Main,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemesEnum>) => {
      switch (action.payload) {
        case 'main':
          return {
            currentTheme: ThemesEnum.Main,
          }
        case 'dark':
          return {
            currentTheme: ThemesEnum.Dark,
          }
        default:
          return state
      }
    },
  },
})

export const selectTheme = createSelector(
  (state: RootState) => state.theme,
  (state) => state,
)

export const { changeTheme } = themeSlice.actions

const persistConfig = {
  key: 'theme',
  version: 1,
  storage,
}

export default persistReducer(persistConfig, themeSlice.reducer)
