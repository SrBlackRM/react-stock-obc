import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/layout/MainLayout'
import Home from './pages/Home'
import ItemsLayout from './pages/ItemsLayout'
import CreateItem from './pages/items/CreateItem'
import ListItems from './pages/items/ListItems'
import ShowItem from './pages/items/ShowItem'
import UpdateItem from './pages/items/UpdateItem'

const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: '/items', element: <ItemsLayout />, 
            children: [
                { index: true, element: <ListItems /> },
                { path:'new' , element: <CreateItem /> },
                { path:':id' , element: <ShowItem /> },
                { path:':id/update' , element: <UpdateItem /> }
            ]
        }
    ]
}])

export default router