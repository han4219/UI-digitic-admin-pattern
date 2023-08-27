import { Button, Dropdown, Layout, theme as antTheme } from 'antd'
import { FC } from 'react'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import useAppSelector from '@/hooks/useAppSelector.ts'
import { useTranslation } from 'react-i18next'
import Language from '@/svgs/Language.tsx'
import { useNavigate } from 'react-router-dom'
import useAppDispatch from '@/hooks/useAppDispatch.ts'
import { setAppConfig } from '@/stores/app/app.slice.ts'
import { routePath } from '@/constants/path.ts'
import Moon from '@/svgs/Moon.tsx'
import Sun from '@/svgs/Sun.tsx'
import { setGlobalState } from '@/stores/global/global.slice.ts'
import { themeStatus } from '@/stores/global/global.interface.ts'

const { Header } = Layout

interface HeaderProps {
  collapsed: boolean
  toggle: () => void
}

const HeaderComponent: FC<HeaderProps> = ({ collapsed, toggle }) => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token = antTheme.useToken()

  const logged = true

  const { language } = useAppSelector((state) => state.app)
  const { theme } = useAppSelector((state) => state.global)

  const handleLogout = () => {
    console.log('logged out')
  }

  const handleChangeLanguage = (lng: 'en' | 'vi') => {
    dispatch(setAppConfig({ language: lng }))
    i18n.changeLanguage(lng).then()
  }

  const handleChangeTheme = () => {
    dispatch(
      setGlobalState({ theme: theme === themeStatus.light ? themeStatus.dark : themeStatus.light })
    )
  }

  return (
    <Header
      className='p-4 flex items-center'
      style={{ backgroundColor: token.token.colorBgContainer }}
    >
      <div className='w-full flex items-center justify-between'>
        <button onClick={toggle}>
          <span id='sidebar-trigger'>
            {collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: '20px' }} />
            )}
          </span>
        </button>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            {theme === 'light' ? (
              <Button type='text' onClick={handleChangeTheme}>
                <Moon />
              </Button>
            ) : (
              <Button type='text' onClick={handleChangeTheme}>
                <Sun />
              </Button>
            )}
          </div>
          <Dropdown
            menu={{
              onClick: ({ key }) => handleChangeLanguage(key as 'en' | 'vi'),
              items: [
                {
                  key: 'vi',
                  disabled: language === 'vi',
                  label: 'Vietnamese'
                },
                {
                  key: 'en',
                  disabled: language === 'en',
                  label: 'English'
                }
              ]
            }}
          >
            <span className='cursor-pointer'>
              <Language />
            </span>
          </Dropdown>

          {logged ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: <span onClick={() => navigate('/dashboard')}>Account</span>
                  },
                  {
                    key: '2',
                    icon: <LogoutOutlined />,
                    label: <span onClick={handleLogout}>Logout</span>
                  }
                ]
              }}
            >
              <div className='cursor-pointer'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU'
                  alt=''
                  className='w-10 h-10 rounded-full'
                />
              </div>
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={() => navigate(routePath.login)}>
              Login
            </span>
          )}
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
