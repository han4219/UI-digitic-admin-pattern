import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { RouteProps } from 'react-router'

const PrivateRoute: FC<RouteProps> = (props) => {
  const logged = true
  const navigate = useNavigate()
  const { t } = useTranslation()

  if (logged) return props.children

  return (
    <Result
      status='403'
      title='403'
      subTitle={t('global.tips.unauthorized')}
      extra={
        <Button
          type='primary'
          onClick={() =>
            navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })
          }
        >
          {t('global.tips.goToLogin')}
        </Button>
      }
    />
  )
}

export default PrivateRoute
