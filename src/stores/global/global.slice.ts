import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalState } from '@/stores/global/global.interface.ts'
import { getGlobalState } from '@/stores/global/global.state.ts'

const initialState: IGlobalState = getGlobalState()

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<IGlobalState>>) {
      Object.assign(state, action.payload)
    }
  }
})

export const { setGlobalState } = globalSlice.actions

export default globalSlice.reducer
