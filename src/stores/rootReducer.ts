import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '@/stores/app/app.slice.ts'
import globalReducer from '@/stores/global/global.slice.ts'

const rootReducer = combineReducers({
  app: appReducer,
  global: globalReducer
})

export default rootReducer
