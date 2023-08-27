import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, Checkbox, Form, Input } from 'antd'
import type { LoginParams } from '@/interface/user/login'

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest'
}

const Login: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const onFinished = async (form: LoginParams) => {
    console.log(form, 'form data')
    navigate('/')
  }
  return (
    <div className='flex justify-center items-center bg-[#f0f2f5] h-screen'>
      <Form<LoginParams>
        onFinish={onFinished}
        className='w-[300px] py-10 px-4'
        initialValues={initialValues}
      >
        <h2 className='text-center font-bold text-2xl text-[#4096FF] pb-5'>DIGITIC ADMIN</h2>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: t('global.tips.enterUsernameMessage')
            }
          ]}
        >
          <Input placeholder={t('global.tips.username')} />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: t('global.tips.enterPasswordMessage')
            }
          ]}
        >
          <Input type='password' placeholder={t('global.tips.password')} />
        </Form.Item>
        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>{t('global.tips.rememberUser')}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' className='w-full bg-[#13C2C2]'>
            {t('global.tips.login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
