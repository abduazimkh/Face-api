import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <App />        
      </Suspense>
    </BrowserRouter>
)
