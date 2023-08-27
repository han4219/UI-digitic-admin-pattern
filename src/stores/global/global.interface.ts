export enum themeStatus {
  'light' = 'light',
  'dark' = 'dark'
}

export interface IGlobalState {
  loading: boolean
  theme: themeStatus
  message?: string
}
