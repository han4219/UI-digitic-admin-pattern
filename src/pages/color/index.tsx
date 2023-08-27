import { Button, ColorPicker, Form, Typography } from 'antd'
import { BoldOutlined, FormOutlined, HomeOutlined } from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface ColorFieldType {
  color: {
    color: string
    hex: string
  }
}

const { Title } = Typography
const Color = () => {
  const [color, setColor] = useState({ color: '', hex: '' })
  const { t } = useTranslation()

  return (
    <div>
      <BreadcrumbComponent
        items={[
          {
            href: '/dashboard',
            title: (
              <div>
                <HomeOutlined /> <span>{t(menuKeys.dashboard)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-500'>
                <BoldOutlined /> <span>{t(menuKeys.blog)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-600'>
                <FormOutlined /> <span>{t(menuKeys.blog_add)}</span>
              </div>
            )
          }
        ]}
      />
      <Title level={4}>Add Color</Title>
      <Form
        autoComplete='off'
        onFinish={() => {
          console.log(color)
        }}
      >
        <Form.Item<ColorFieldType> name='color'>
          <ColorPicker
            showText
            onChange={(color, hex) => setColor({ color: color.toHexString(), hex })}
          />
        </Form.Item>

        <Form.Item>
          <Button className='bg-blue-600' type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Color
