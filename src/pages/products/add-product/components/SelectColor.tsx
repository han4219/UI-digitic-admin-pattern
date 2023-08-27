import { Select, Space } from 'antd'

const { Option } = Select

const SelectColor = () => {
  return (
    <Select
      size='large'
      mode='multiple'
      style={{ width: '100%' }}
      placeholder='select color'
      onChange={(selectedColors) => {
        console.log(selectedColors, 'colors')
      }}
      optionLabelProp='label'
    >
      <Option
        value='#E71818'
        label={<div className='w-5 h-5 rounded-full' style={{ backgroundColor: '#E71818' }}></div>}
      >
        <Space className='flex items-center'>
          <div
            role='img'
            aria-label='#E71818'
            className='w-5 h-5 rounded-full'
            style={{ backgroundColor: '#E71818' }}
          ></div>
          #E71818
        </Space>
      </Option>
      <Option
        value='#DA21D3'
        label={<div className='w-5 h-5 rounded-full' style={{ backgroundColor: '#DA21D3' }}></div>}
      >
        <Space className='flex items-center'>
          <div
            role='img'
            aria-label='#DA21D3'
            className='w-5 h-5 rounded-full'
            style={{ backgroundColor: '#DA21D3' }}
          ></div>
          #DA21D3
        </Space>
      </Option>
      <Option
        value='#2ADA21'
        label={<div className='w-5 h-5 rounded-full' style={{ backgroundColor: '#2ADA21' }}></div>}
      >
        <Space className='flex items-center'>
          <div
            role='img'
            className='w-5 h-5 rounded-full'
            style={{ backgroundColor: '#2ADA21' }}
          ></div>
          #2ADA21
        </Space>
      </Option>
      <Option
        value='#1677FF'
        label={<div className='w-5 h-5 rounded-full' style={{ backgroundColor: '#1677FF' }}></div>}
      >
        <Space className='flex items-center'>
          <div
            role='img'
            className='w-5 h-5 rounded-full'
            style={{ backgroundColor: '#1677FF' }}
          ></div>
          #E71818
        </Space>
      </Option>
    </Select>
  )
}

export default SelectColor
