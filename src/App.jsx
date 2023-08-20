import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { StockContextProvider } from './contexts/StockContext.jsx'

function App() {
 
  return (
    <StockContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </StockContextProvider>
  )
}

export default App
