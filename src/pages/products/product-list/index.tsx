import React from 'react'
import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/es/table'
import { Button, Image, Space, Table } from 'antd'
import { faker } from '@faker-js/faker'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import {
  DeleteOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'

interface ProductDataType {
  key: React.Key
  title: string
  price: number
  priceDiscount: number
  brand: string
  quantity: number
  category: string
  sold: number
  image: string
}

const ProductList = () => {
  const { t } = useTranslation()

  const columns: ColumnsType<ProductDataType> = [
    {
      key: 'image',
      dataIndex: 'image',
      title: 'Image',
      render: (img) => <Image src={img} width={150} />
    },
    {
      key: 'title',
      dataIndex: 'title',
      title: 'Title'
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Price'
    },
    {
      key: 'priceDiscount',
      dataIndex: 'priceDiscount',
      title: 'Price Discount'
    },
    {
      key: 'category',
      dataIndex: 'category',
      title: 'Category'
    },
    {
      key: 'brand',
      dataIndex: 'brand',
      title: 'Brand'
    },
    {
      key: 'quantity',
      dataIndex: 'quantity',
      title: 'Quantity'
    },
    {
      key: 'sold',
      dataIndex: 'sold',
      title: 'Sold'
    },
    {
      key: 'action',
      title: 'Action',
      render: () => (
        <Space size='middle'>
          <Button type='primary' className='bg-blue-600' size='middle'>
            Detail
          </Button>
          <Button danger type='primary' className='flex justify-center items-center'>
            <DeleteOutlined />
          </Button>
        </Space>
      )
    }
  ]

  const data: ProductDataType[] = Array(15)
    .fill(0)
    .map((_, index) => ({
      key: index,
      title: faker.person.jobTitle(),
      image: faker.image.url({ width: 800, height: 800 }),
      price: Number(faker.commerce.price()),
      brand: faker.animal.type(),
      priceDiscount: Number(faker.commerce.price()),
      sold: faker.number.int(1000),
      quantity: faker.number.int(100),
      category: faker.vehicle.type()
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
                <UnorderedListOutlined /> <span>{t(menuKeys.catalog)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-600'>
                <ShoppingCartOutlined /> <span>{t(menuKeys.catalog_productList)}</span>
              </div>
            )
          }
        ]}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ProductList
