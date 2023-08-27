import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/es/table'
import { Button, Space, Table } from 'antd'
import { faker } from '@faker-js/faker'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { DeleteOutlined, HomeOutlined, SketchOutlined } from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'
import React from 'react'

interface BrandDataType {
  key: React.Key
  name: string
  createdAt: string
  updatedAt: string
}

const BrandList = () => {
  const { t } = useTranslation()

  const columns: ColumnsType<BrandDataType> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name'
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
          <Button danger type='primary' className='flex items-center justify-center'>
            <DeleteOutlined />
          </Button>
        </Space>
      )
    }
  ]

  const data: BrandDataType[] = Array(8)
    .fill(0)
    .map((_, index) => ({
      key: index,
      name: faker.company.name(),
      createdAt: faker.date.anytime().toString(),
      updatedAt: faker.date.anytime().toString()
    }))

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
                <SketchOutlined /> <span>{t(menuKeys.catalog_brandList)}</span>
              </div>
            )
          }
        ]}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default BrandList
