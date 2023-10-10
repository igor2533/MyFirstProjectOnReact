import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PageOne } from './component/Pages';
import Products from './component/products';


import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
  Route,
  Link,
} from 'react-router-dom';
import Product from './component/product';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="products">product</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: "product/:alias",
    element: <Product />,

  },


]);




createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
);