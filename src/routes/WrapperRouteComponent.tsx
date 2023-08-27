import { FC, ReactElement } from 'react'
import PrivateRoute from '@/routes/PrivateRoute.tsx'
import { useTranslation } from 'react-i18next'
import { RoutesProps } from 'react-router-dom'

export interface WrapperRouteProps extends RoutesProps {
  title: string
  auth?: boolean
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ title, auth, ...props }) => {
  const { t } = useTranslation()

  if (title) {
    document.title = t(title)
  }

  return auth ? <PrivateRoute {...props} /> : (props.children as ReactElement)
}

export default WrapperRouteComponent
