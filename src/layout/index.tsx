import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { Layout, theme as antTheme, Drawer } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import HeaderComponent from '@/layout/Header.tsx'
import MenuComponent from '@/layout/Menu.tsx'
import useAppSelector from '@/hooks/useAppSelector.ts'
import useAppDispatch from '@/hooks/useAppDispatch.ts'
import { setAppConfig } from '@/stores/app/app.slice.ts'
import { getAppState } from '@/stores/app/app.state.ts'

const { Sider, Content } = Layout
const WIDTH = 1000

const LayoutPage: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [openKey, setOpenKey] = useState<string>()
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname)
  const { collapsed: collapsedInit, device } = useAppSelector((state) => state.app)

  const isMobile = device === 'MOBILE'

  const collapsed = useMemo(() => {
    return collapsedInit
  }, [collapsedInit])
  const token = antTheme.useToken

  const toggle = () => {
    dispatch(setAppConfig({ collapsed: !collapsed }))
  }

  // responsive collapsed sider
  useEffect(() => {
    window.onresize = () => {
      const { device } = getAppState()
      const rect = document.body.getBoundingClientRect()
      const needCollapse = rect.width < WIDTH

      dispatch(
        setAppConfig({
          device,
          collapsed: needCollapse
        })
      )
    }
  }, [dispatch])

  // update open key for menu when user change path direct url
  useEffect(() => {
    const path = location.pathname
    setOpenKey('/' + path.split('/')[1])
  }, [location.pathname])

  return (
    <Layout className='h-screen overflow-y-hidden'>
      {!isMobile ? (
        <Sider
          width={265}
          className='shadow-shadowRight'
          trigger={null}
          collapsible
          style={{ backgroundColor: token().token.colorBgContainer }}
          collapsedWidth={isMobile ? 0 : 80}
          collapsed={collapsed}
          breakpoint='md'
        >
          {device !== 'MOBILE' && (
            <Link
              to='/dashboard'
              className='block border-b border-b-gray-100 bg-cyan-500 flex-shrink-1'
              style={{ padding: '16px 0' }}
            >
              <p className='font-bold text-2xl text-gray-700 text-center'>
                <span className='text-green-400'>D</span>igitic
              </p>
            </Link>
          )}
          <MenuComponent
            openKey={openKey}
            onChangeOpenKey={(k) => setOpenKey(k)}
            selectedKey={selectedKey}
            onChangeSelectedKey={(k) => setSelectedKey(k)}
          />
        </Sider>
      ) : (
        <Drawer
          width='250'
          placement='left'
          bodyStyle={{ padding: 0, height: '100%' }}
          closable={false}
          onClose={toggle}
          open={!collapsed}
        >
          <div className='w-full border-b' style={{ padding: '16px 0' }}>
            <p className='font-bold text-2xl text-gray-700 text-center'>
              <span className='text-green-400 italic'>Digitic</span>
            </p>
          </div>
          <MenuComponent
            openKey={openKey}
            onChangeOpenKey={(k) => setOpenKey(k)}
            selectedKey={selectedKey}
            onChangeSelectedKey={(k) => setSelectedKey(k)}
          />
        </Drawer>
      )}
      <Layout>
        <HeaderComponent collapsed={collapsed} toggle={toggle} />
        <Content className='px-4 h-screen overflow-y-auto'>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
