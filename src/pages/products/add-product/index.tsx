import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Typography } from 'antd'
import UploadProductImage from '@/pages/products/add-product/components/UploadProductImage.tsx'
import BreadcrumbTitle from '@/pages/products/add-product/components/BreadcrumbTitle.tsx'
import SelectBrand from '@/pages/products/add-product/components/SelectBrand.tsx'
import SelectColor from '@/pages/products/add-product/components/SelectColor.tsx'
import SelectCategory from '@/pages/products/add-product/components/SelectCategory.tsx'

interface ProductFieldType {
  title: string
  description: string
  price: number
  priceDiscount: number
  brand: string
  images: string[]
  category: string
  colors: string[]
}

const initialValues: ProductFieldType = {
  title: '',
  description: '',
  brand: '',
  colors: [],
  images: [],
  price: 0,
  priceDiscount: 0,
  category: ''
}

const AddProduct = () => {
  const { Title } = Typography
  const [description, setDescription] = useState('')

  return (
    <div id='add_blog_page' className='pb-5'>
      <BreadcrumbTitle />
      <div>
        <Title level={3} className='text-center bg-gray-200 rounded-md py-3'>
          Add Blog
        </Title>
        <Form
          initialValues={initialValues}
          layout='vertical'
          autoComplete='off'
          onFinish={(values) => {
            console.log(values)
          }}
        >
          {/*des: title*/}
          <Form.Item<ProductFieldType>
            label='Title'
            name='title'
            rules={[{ required: true, message: 'Product title is required!' }]}
          >
            <Input size='large' placeholder='Enter product title...' prefix={<EditOutlined />} />
          </Form.Item>

          {/* des: description */}
          <Form.Item<ProductFieldType> label='Description' name='description' required={true}>
            <ReactQuill
              className='bg-white rounded-md'
              theme='snow'
              value={description}
              onChange={(value) => {
                setDescription(value)
              }}
            />
          </Form.Item>

          {/* des: price */}
          <div className='w-full flex flex-row justify-between gap-4'>
            <Form.Item<ProductFieldType> label='Price' required name='price' className='flex-1'>
              <InputNumber
                min={0}
                max={100}
                size='large'
                onChange={(value) => {
                  console.log(value)
                }}
                className='w-full'
              />
            </Form.Item>
            <Form.Item<ProductFieldType>
              label='Price Discount'
              required
              name='priceDiscount'
              className='flex-1'
            >
              <InputNumber
                min={0}
                max={100}
                size='large'
                onChange={(value) => {
                  console.log(value)
                }}
                className='w-full'
              />
            </Form.Item>
          </div>

          {/* des: category */}
          <Form.Item<ProductFieldType>
            label='Category'
            name='category'
            // rules={[{ required: true, message: 'Product category is required!' }]}
          >
            <SelectCategory />
          </Form.Item>

          {/* des: color */}
          <Form.Item<ProductFieldType> required label='Colors' name='colors'>
            <SelectColor />
          </Form.Item>

          {/* des: brand */}
          <Form.Item<ProductFieldType> required label='Brand' name='brand'>
            <SelectBrand />
          </Form.Item>

          {/* des: image */}
          <Form.Item<ProductFieldType> label='Images' required name='images'>
            <UploadProductImage />
          </Form.Item>

          <Button htmlType='submit' type='primary' className='bg-blue-600'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddProduct
