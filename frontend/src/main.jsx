
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'sweetalert2/src/sweetalert2.scss'
createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
   <RouterProvider router={router} />
  </Provider>,
)
