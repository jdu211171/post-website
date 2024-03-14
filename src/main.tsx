// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import './index.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import ErrorPage from "@/error-page.tsx";
import Layout from "@/routes/layout.tsx";
import Home from "@/routes/home.tsx";
import Post from "@/routes/post.tsx";
import Private from "@/routes/private.tsx";
import Bookmark from "@/routes/bookmark.tsx";
import Settings from "@/routes/settings.tsx";
import Login from "@/routes/login.tsx";
import {SessionProvider} from "@/contexts/UserSession.tsx";
import {DataProvider} from "@/contexts/DataSession.tsx";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/post/:postId',
        element: <Post/>,
      },
      {
        path: '/private',
        element: <Private/>,
      },
      {
        path: '/bookmark',
        element: <Bookmark/>,
      },
      {
        path: '/settings',
        element: <Settings/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SessionProvider>
        <DataProvider>
          <RouterProvider router={router}/>
        </DataProvider>
      </SessionProvider>
    </ThemeProvider>
  </React.StrictMode>
)
