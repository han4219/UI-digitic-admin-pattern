import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { FC } from 'react'

type Props = {
  items: ItemType[]
  className?: string
}

const BreadcrumbComponent: FC<Props> = ({
  items,
  className = 'w-full sticky top-0 z-10 bg-gray-100 p-4'
}) => {
  return <Breadcrumb items={items} className={className} />
}

export default BreadcrumbComponent
