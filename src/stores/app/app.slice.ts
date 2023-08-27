import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAppState } from '@/stores/app/app.state.ts'
import { IAppState } from '@/stores/app/app.interface.ts'

const initialState: IAppState = {
  ...getAppState(),
  language: 'en'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppConfig(state, action: PayloadAction<Partial<IAppState>>) {
      Object.assign(state, action.payload)
    }
  }
})

export const { setAppConfig } = appSlice.actions

export default appSlice.reducer
