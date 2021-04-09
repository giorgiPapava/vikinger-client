import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@src/store'

type LoginRegisterState = {
  isLogin: boolean
}

const initialState: LoginRegisterState = {
  isLogin: true,
}

const loginRegisterSlice = createSlice({
  name: 'loginRegister',
  initialState,
  reducers: {
    makeLogin: (_state, _action: PayloadAction<void>) => ({
      isLogin: true,
    }),
    makeRegister: (_state, _action: PayloadAction<void>) => ({
      isLogin: false,
    }),
  },
})

export const selectLoginRegister = createSelector(
  (state: RootState) => state.loginRegister,
  (state) => state,
)

export const { makeLogin, makeRegister } = loginRegisterSlice.actions

export default loginRegisterSlice.reducer
