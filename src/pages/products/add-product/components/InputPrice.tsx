import { InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import { FC } from 'react'

interface InputPriceProps extends InputNumberProps {
  className?: string
}

const InputPrice: FC<InputPriceProps> = ({
  min,
  max,
  size,
  defaultValue,
  onChange,
  className = 'w-full'
}) => {
  return (
    <InputNumber
      min={min}
      max={max}
      size={size}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    />
  )
}

export default InputPrice
