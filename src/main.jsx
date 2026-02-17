// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './views/Add.jsx'
import Edit from './views/Edit.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/Edit/:id" element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
)