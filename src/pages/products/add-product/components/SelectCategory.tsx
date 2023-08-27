import { Select } from 'antd'

const SelectCategory = () => {
  return (
    <Select
      size='large'
      className='w-full mt-4'
      placeholder='Select product category'
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
  )
}

export default SelectCategory
