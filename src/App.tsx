import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Index from './pages/Index'
import EditNote from './pages/EditNote'
import Notes from './pages/Notes'
import ViewNote from './pages/ViewNote'
import CreateNote from './pages/createNote'
import ErrorPage from './pages/ErrorPage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          index: true,
          element: <Index/>
        },
        {
          path:"/create",
          element: <CreateNote/>
        },
        {
          path:"/notes",
          element: <Notes/>
        },
        {
          path: "/viewNote/:id",
          element: <ViewNote/>
        },
        {
          path: "/EditNote/:id",
          element: <EditNote/>
        }
      ]
    },
    {
      path:"*",
      element: <ErrorPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App