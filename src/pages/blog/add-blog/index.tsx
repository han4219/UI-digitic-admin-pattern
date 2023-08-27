import { menuKeys } from '@/i18n/keys.ts'
import { useTranslation } from 'react-i18next'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import {
  BoldOutlined,
  EditOutlined,
  FormOutlined,
  HomeOutlined,
  InboxOutlined
} from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { Form, Input, Select, Typography, Upload, message } from 'antd'
import type { UploadProps } from 'antd'

interface FieldType {
  title: string
  image: string
  category: string
  content: string
}

const props: UploadProps = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  }
}

const { Dragger } = Upload

const AddBlog = () => {
  const { t } = useTranslation()
  const { Title } = Typography
  const [blogContent, setBlogContent] = useState('')

  const handleChangeBlogContent = (value: string) => {
    setBlogContent(value)
  }

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
      <div>
        <Title level={4}>Add Blog</Title>
        <Form
          autoComplete='off'
          onFinish={(values) => {
            console.log(values)
          }}
        >
          <Form.Item<FieldType> name='image'>
            <Dragger {...props}>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload blog image
              </p>
              <p className='ant-upload-hint'>
                Support for a single or bulk upload. Strictly prohibited from uploading company data
                or other banned files.
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item<FieldType>
            name='title'
            rules={[{ required: true, message: 'Please enter blog title!' }]}
          >
            <Input size='large' placeholder='Enter blog title...' prefix={<EditOutlined />} />
          </Form.Item>

          <Form.Item<FieldType>
            name='category'
            rules={[{ required: true, message: 'Please select blog category!' }]}
          >
            <Select
              size='large'
              className='w-full mt-4'
              placeholder='Select blog category'
              optionFilterProp='children'
              options={[
                {
                  value: 'category1',
                  label: 'Category 1'
                },
                {
                  value: 'category2',
                  label: 'Category 2'
                },
                {
                  value: 'category3',
                  label: 'Category 3'
                }
              ]}
            />
          </Form.Item>

          <div className='py-4'>
            <Form.Item<FieldType> name='content' initialValue={blogContent}>
              <ReactQuill
                className='bg-white rounded-md'
                theme='snow'
                value={blogContent}
                onChange={(value) => {
                  handleChangeBlogContent(value)
                }}
              />
            </Form.Item>
          </div>

          <button type='submit' className='px-10 py-2 rounded-md bg-blue-600 text-white'>
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}

export default AddBlog
