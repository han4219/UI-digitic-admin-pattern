import i18n from 'i18next'
import type { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { VI } from '@/i18n/vi'
import { EN } from '@/i18n/en'

const resources: Resource = {
  en: {
    translation: {
      ...EN
    }
  },
  vi: {
    translation: {
      ...VI
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    console.log('initialized i18n.')
  })
  .catch((reason) => {
    console.log(reason)
  })
