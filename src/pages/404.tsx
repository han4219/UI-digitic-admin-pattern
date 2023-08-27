import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' className='bg-green-700' onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    ></Result>
  )
}

export default NotFoundPage
