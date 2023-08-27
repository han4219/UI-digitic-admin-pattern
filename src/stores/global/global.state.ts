import { IGlobalState, themeStatus } from '@/stores/global/global.interface.ts'

export const getGlobalState = (): IGlobalState => ({
  message: '',
  loading: false,
  theme: themeStatus.light
})
