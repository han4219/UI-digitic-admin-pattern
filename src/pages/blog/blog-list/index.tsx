import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { BoldOutlined, HomeOutlined, PicRightOutlined } from '@ant-design/icons'
import { menuKeys } from '@/i18n/keys.ts'
import { useTranslation } from 'react-i18next'
import { Button, Image, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { faker } from '@faker-js/faker'

interface BlogDataType {
  key: React.Key
  title: string
  description: string
  category: string
  numViews: number
  image: string
  likes: string[]
  dislikes: string[]
}

const BlogList = () => {
  const { t } = useTranslation()

  const columns: ColumnsType<BlogDataType> = [
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
      key: 'description',
      dataIndex: 'description',
      title: 'Description'
    },
    {
      key: 'category',
      dataIndex: 'category',
      title: 'Category'
    },
    {
      key: 'numViews',
      dataIndex: 'numViews',
      title: 'Number of views'
    },

    {
      key: 'likes',
      dataIndex: 'likes',
      title: 'Likes',
      render: (_, { likes }) => <span>{likes.length}</span>
    },
    {
      key: 'dislikes',
      dataIndex: 'dislikes',
      title: 'Dislikes',
      render: (_, { dislikes }) => <span>{dislikes.length}</span>
    },
    {
      key: 'action',
      title: 'Action',
      render: () => (
        <Space size='middle'>
          <Button type='primary' className='bg-blue-600' size='middle'>
            Detail
          </Button>
          <Button danger type='primary'>
            Delete
          </Button>
        </Space>
      )
    }
  ]

  const data: BlogDataType[] = Array(15)
    .fill(0)
    .map((_, index) => ({
      key: index,
      title: faker.person.jobTitle(),
      description: faker.finance.transactionDescription(),
      image: faker.image.url({ width: 800, height: 800 }),
      category: faker.animal.type(),
      numViews: faker.number.int(100),
      likes: Array(faker.number.int(50)),
      dislikes: Array(faker.number.int(50))
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
                <BoldOutlined /> <span>{t(menuKeys.blog)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-600'>
                <PicRightOutlined /> <span>{t(menuKeys.blogList)}</span>
              </div>
            )
          }
        ]}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default BlogList
