import { titleKeys } from '@/i18n/keys.ts'
import { routePath } from '@/constants/path.ts'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import LayoutPage from '@/layout'
import WrapperRouteComponent from '@/routes/WrapperRouteComponent.tsx'
import NotFoundPage from '@/pages/404.tsx'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import ProductList from '@/pages/products/product-list'
import AddProduct from '@/pages/products/add-product'
import Brand from '@/pages/brand'
import BrandList from '@/pages/brand/brand-list'
import Category from '@/pages/category'
import CategoryList from '@/pages/category/category-list'
import Color from '@/pages/color'
import ColorList from '@/pages/color/color-list'
import Order from '@/pages/order'
import BlogList from '@/pages/blog/blog-list'
import AddBlog from '@/pages/blog/add-blog'
import AddBlogCategory from '@/pages/blog/add-blog-category'
import Enquiry from '@/pages/enquiry'
import Customer from '@/pages/customer'
import BlogCategories from '@/pages/blog/blog-categories'

const router = createBrowserRouter([
  {
    path: '',
    element: <WrapperRouteComponent children={<LayoutPage />} title='' />,
    children: [
      {
        index: true,
        element: <Navigate to={routePath.dashboard} />
      },
      {
        path: routePath.dashboard,
        element: <WrapperRouteComponent children={<Dashboard />} title={titleKeys.dashboard} />
      },
      {
        path: routePath.customers,
        element: <WrapperRouteComponent children={<Customer />} title={titleKeys.customer} />
      },
      {
        path: routePath.productList,
        element: (
          <WrapperRouteComponent children={<ProductList />} title={titleKeys.catalog_productList} />
        )
      },
      {
        path: routePath.addProduct,
        element: (
          <WrapperRouteComponent children={<AddProduct />} title={titleKeys.catalog_addProduct} />
        )
      },
      {
        path: routePath.brand,
        element: <WrapperRouteComponent children={<Brand />} title={titleKeys.catalog_brand} />
      },
      {
        path: routePath.brandList,
        element: (
          <WrapperRouteComponent children={<BrandList />} title={titleKeys.catalog_brandList} />
        )
      },
      {
        path: routePath.category,
        element: (
          <WrapperRouteComponent children={<Category />} title={titleKeys.catalog_category} />
        )
      },
      {
        path: routePath.categoryList,
        element: (
          <WrapperRouteComponent
            children={<CategoryList />}
            title={titleKeys.catalog_categoryList}
          />
        )
      },
      {
        path: routePath.color,
        element: <WrapperRouteComponent children={<Color />} title={titleKeys.catalog_color} />
      },
      {
        path: routePath.colorList,
        element: (
          <WrapperRouteComponent children={<ColorList />} title={titleKeys.catalog_colorList} />
        )
      },
      {
        path: routePath.orders,
        element: <WrapperRouteComponent children={<Order />} title={titleKeys.order} />
      },
      {
        path: routePath.blogList,
        element: <WrapperRouteComponent children={<BlogList />} title={titleKeys.blogList} />
      },
      {
        path: routePath.addBlog,
        element: <WrapperRouteComponent children={<AddBlog />} title={titleKeys.blog_add} />
      },
      {
        path: routePath.addBlogCategory,
        element: (
          <WrapperRouteComponent
            children={<AddBlogCategory />}
            title={titleKeys.blog_addCategory}
          />
        )
      },
      {
        path: routePath.blogCategory,
        element: (
          <WrapperRouteComponent
            children={<BlogCategories />}
            title={titleKeys.blog_categoryList}
          />
        )
      },
      {
        path: routePath.enquiries,
        element: <WrapperRouteComponent children={<Enquiry />} title={titleKeys.enquiry} />
      },
      {
        path: routePath.orders,
        element: <WrapperRouteComponent children={<Order />} title={titleKeys.order} />
      }
    ]
  },
  {
    path: routePath.login,
    element: <Login />
  },
  {
    path: '*',
    element: (
      <WrapperRouteComponent auth={false} children={<NotFoundPage />} title={titleKeys.notfound} />
    )
  }
])

export default router
