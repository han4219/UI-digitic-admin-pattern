import { Suspense } from 'react'
import '@/i18n'
import router from '@/routes'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'
import useAppSelector from '@/hooks/useAppSelector.ts'

function App() {
  const { loading } = useAppSelector((state) => state.global)

  return (
    <ConfigProvider>
      <Suspense fallback={null}>
        {loading && (
          <Spin
            size='large'
            spinning={loading}
            className='flex flex-col w-full h-full justify-center items-center bg-gray-200 fixed top-0 left-0 z-50'
          />
        )}
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
