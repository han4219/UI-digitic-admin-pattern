import { menuKeys } from '@/i18n/keys.ts'
import BreadcrumbComponent from '@/components/BreadcrumbComponent'
import { HomeOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const BreadcrumbTitle = () => {
  const { t } = useTranslation()

  return (
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
              <ShoppingCartOutlined /> <span>{t(menuKeys.catalog_addProduct)}</span>
            </div>
          )
        }
      ]}
    />
  )
}

export default BreadcrumbTitle
