import { Button, Space, Table } from 'antd'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { CommentOutlined, HomeOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@/i18n/keys.ts'
import { ColumnsType } from 'antd/es/table'
import { faker } from '@faker-js/faker'

enum EnquiryStatus {
  SUBMITTED = 'Submitted',
  CONTACTED = 'Contacted',
  IN_PROGRESS = 'In Progress'
}

interface DataType {
  key: string
  name: string
  email: string
  phone: string
  comment: string
  status: EnquiryStatus
}

const Enquiry = () => {
  const { t } = useTranslation()

  const columns: ColumnsType<DataType> = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: 'phone',
      title: 'Phone',
      dataIndex: 'phone'
    },
    {
      key: 'comment',
      title: 'Comment',
      dataIndex: 'comment'
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size='middle'>
          <Button type='primary' className='bg-blue-600' size='middle'>
            View
          </Button>
          <Button danger type='primary'>
            Delete
          </Button>
        </Space>
      )
    }
  ]

  const data: DataType[] = Array(15)
    .fill(0)
    .map((_, index) => ({
      key: index.toString(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      comment: faker.lorem.paragraph(),
      status: EnquiryStatus.IN_PROGRESS
    }))

  return (
    <div>
      <BreadcrumbComponent
        items={[
          {
            href: '/',
            title: (
              <div>
                <HomeOutlined /> <span>{t(menuKeys.dashboard)}</span>
              </div>
            )
          },
          {
            title: (
              <div className='text-gray-600'>
                <CommentOutlined className='text-gray-600' /> <span>{t(menuKeys.enquiry)}</span>
              </div>
            )
          }
        ]}
      />
      <div className='mt-4'>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Enquiry
