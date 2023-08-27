import { Button, Form, Input, Typography } from 'antd'
import { BoldOutlined, FormOutlined, HomeOutlined } from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface BrandFieldType {
  name: string
}

const { Title } = Typography
const Brand = () => {
  const [brand, setBrand] = useState('')
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
      <Title level={4}>Add Brand</Title>
      <Form
        autoComplete='off'
        onFinish={(values) => {
          console.log(values)
        }}
      >
        <Form.Item<BrandFieldType> name='name'>
          <Input
            size='large'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder='Enter brand name...'
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

export default Brand
