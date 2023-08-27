import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/es/table'
import { Button, Space, Table } from 'antd'
import { faker } from '@faker-js/faker'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { BgColorsOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'
import React from 'react'

interface ColorDataType {
  key: React.Key
  name: string
  code: string
  createdAt: string
  updatedAt: string
}

const ColorList = () => {
  const { t } = useTranslation()

  const columns: ColumnsType<ColorDataType> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name'
    },
    {
      key: 'code',
      dataIndex: 'code',
      title: 'Code',
      render: (_, { code }) => (
        <div>
          <div className='w-6 h-6 rounded-full' style={{ backgroundColor: code }}></div>
        </div>
      )
    },
    {
      key: 'createdAt',
      dataIndex: 'createdAt',
      title: 'CreatedAt'
    },
    {
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      title: 'UpdatedAt'
    },
    {
      key: 'action',
      title: 'Action',
      render: () => (
        <Space size='middle'>
          <Button type='primary' className='bg-blue-600' size='middle'>
            Edit
          </Button>
          <Button danger type='primary'>
            Delete
          </Button>
        </Space>
      )
    }
  ]

  const data: ColorDataType[] = Array(8)
    .fill(0)
    .map((_, index) => {
      const color = faker.vehicle.color()
      return {
        key: index,
        name: color,
        code: color,
        createdAt: faker.date.anytime().toString(),
        updatedAt: faker.date.anytime().toString()
      }
    })

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
                <UnorderedListOutlined /> <span>{t(menuKeys.catalog)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-600'>
                <BgColorsOutlined /> <span>{t(menuKeys.catalog_colorList)}</span>
              </div>
            )
          }
        ]}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ColorList
