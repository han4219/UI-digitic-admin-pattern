import { Select } from 'antd'

const SelectBrand = () => {
  return (
    <Select
      size='large'
      className='w-full mt-4'
      placeholder='Select brand'
      optionFilterProp='children'
      options={[
        {
          value: 'samsung',
          label: 'Samsung'
        },
        {
          value: 'iphone',
          label: 'Iphone'
        },
        {
          value: 'vsmart',
          label: 'Vsmart'
        }
      ]}
    />
  )
}

export default SelectBrand
