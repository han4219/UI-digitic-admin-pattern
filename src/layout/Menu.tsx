import { Menu } from 'antd'
import {
  BgColorsOutlined,
  BoldOutlined,
  CommentOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  EditOutlined,
  FormOutlined,
  PicRightOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SketchOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@/i18n/keys.ts'
import { MenuItem } from '@/interface/layout/menu.interface.ts'
import { getMenuItem } from '@/utils/menu.util.ts'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAppSelector from '@/hooks/useAppSelector.ts'
import useAppDispatch from '@/hooks/useAppDispatch.ts'
import { setAppConfig } from '@/stores/app/app.slice.ts'
import { routePath } from '@/constants/path.ts'

type MenuProps = {
  openKey?: string
  onChangeOpenKey: (key?: string) => void
  selectedKey: string
  onChangeSelectedKey: (key: string) => void
}

const MenuComponent: FC<MenuProps> = ({
  openKey = routePath.dashboard,
  selectedKey,
  onChangeOpenKey,
  onChangeSelectedKey
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const { device } = useAppSelector((state) => state.app)
  const { theme } = useAppSelector((state) => state.global)

  const menuList: MenuItem[] = [
    getMenuItem(t(menuKeys.dashboard), routePath.dashboard, <DashboardOutlined />, {
      backgroundColor:
        location.pathname === routePath.dashboard ? (theme === 'dark' ? '' : '#B5F5EC') : '',
      color: theme === 'dark' ? '#ededed' : 'black'
    }),
    getMenuItem(t(menuKeys.customer), routePath.customers, <UserOutlined />, {
      backgroundColor:
        location.pathname === routePath.customers ? (theme === 'dark' ? '' : '#B5F5EC') : '',
      color: theme === 'dark' ? '#ededed' : 'black'
    }),
    getMenuItem(
      t(menuKeys.catalog),
      routePath.catalog,
      <UnorderedListOutlined />,
      {
        backgroundColor:
          location.pathname === routePath.catalog ? (theme === 'dark' ? '' : '#B5F5EC') : '',
        color: theme === 'dark' ? '#ededed' : 'black'
      },
      [
        getMenuItem(
          t(menuKeys.catalog_addProduct),
          routePath.addProduct,
          <ShoppingCartOutlined />,
          {
            backgroundColor:
              location.pathname === routePath.addProduct ? (theme === 'dark' ? '' : '#B5F5EC') : '',
            color: theme === 'dark' ? '#ededed' : 'black'
          }
        ),
        getMenuItem(
          t(menuKeys.catalog_productList),
          routePath.productList,
          <ShoppingCartOutlined />,
          {
            backgroundColor:
              location.pathname === routePath.productList
                ? theme === 'dark'
                  ? '#B5F5EC'
                  : ''
                : '',
            color: theme === 'dark' ? '#ededed' : 'black'
          }
        ),
        getMenuItem(t(menuKeys.catalog_brand), routePath.brand, <SketchOutlined />, {
          backgroundColor:
            location.pathname === routePath.brand ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.catalog_brandList), routePath.brandList, <SketchOutlined />, {
          backgroundColor:
            location.pathname === routePath.brandList ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.catalog_category), routePath.category, <DatabaseOutlined />, {
          backgroundColor:
            location.pathname === routePath.category ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(
          t(menuKeys.catalog_categoryList),
          routePath.categoryList,
          <DatabaseOutlined />,
          {
            backgroundColor:
              location.pathname === routePath.categoryList
                ? theme === 'dark'
                  ? '#B5F5EC'
                  : ''
                : '',
            color: theme === 'dark' ? '#ededed' : 'black'
          }
        ),
        getMenuItem(t(menuKeys.catalog_color), routePath.color, <BgColorsOutlined />, {
          backgroundColor:
            location.pathname === routePath.color ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.catalog_colorList), routePath.colorList, <BgColorsOutlined />, {
          backgroundColor:
            location.pathname === routePath.colorList ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        })
      ]
    ),
    getMenuItem(
      t(menuKeys.blog),
      routePath.blog,
      <BoldOutlined />,
      {
        backgroundColor:
          location.pathname === routePath.blog ? (theme === 'dark' ? '' : '#B5F5EC') : '',
        color: theme === 'dark' ? '#ededed' : 'black'
      },
      [
        getMenuItem(t(menuKeys.blog_add), routePath.addBlog, <FormOutlined />, {
          backgroundColor:
            location.pathname === routePath.addBlog ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.blogList), routePath.blogList, <PicRightOutlined />, {
          backgroundColor:
            location.pathname === routePath.blogList ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.blog_categoryList), routePath.blogCategory, <SnippetsOutlined />, {
          backgroundColor:
            location.pathname === routePath.blogCategory ? (theme === 'dark' ? '' : '#B5F5EC') : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        }),
        getMenuItem(t(menuKeys.blog_addCategory), routePath.addBlogCategory, <EditOutlined />, {
          backgroundColor:
            location.pathname === routePath.addBlogCategory
              ? theme === 'dark'
                ? '#B5F5EC'
                : ''
              : '',
          color: theme === 'dark' ? '#ededed' : 'black'
        })
      ]
    ),
    getMenuItem(t(menuKeys.order), routePath.orders, <ShoppingOutlined />, {
      backgroundColor:
        location.pathname === routePath.orders ? (theme === 'dark' ? '' : '#B5F5EC') : '',
      color: theme === 'dark' ? '#ededed' : 'black'
    }),
    getMenuItem(t(menuKeys.enquiry), routePath.enquiries, <CommentOutlined />, {
      backgroundColor:
        location.pathname === routePath.enquiries ? (theme === 'dark' ? '' : '#B5F5EC') : '',
      color: theme === 'dark' ? '#ededed' : 'black'
    })
  ]

  const handleOpenChange = (keys: string[]) => {
    const key = keys.pop()
    onChangeOpenKey(key)
  }

  const handleMenuClicked = (key: string) => {
    onChangeSelectedKey(key)
    navigate(key)

    if (device !== 'DESKTOP') {
      dispatch(setAppConfig({ collapsed: true }))
    }
  }

  return (
    <Menu
      className='h-full'
      items={menuList}
      mode='inline'
      theme={theme}
      selectedKeys={[selectedKey]}
      openKeys={[openKey]}
      onOpenChange={(keys) => handleOpenChange(keys)}
      onSelect={({ key }) => handleMenuClicked(key)}
      style={{ borderInlineEnd: 'none' }}
    />
  )
}

export default MenuComponent
