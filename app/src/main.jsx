import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import PostDetails from './views/PostDetails'
import UserDetails from './views/UserDetails'
import App from './App'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Home />}>
              <Route path=":slug" element={<PostDetails />} />
            </Route>
            <Route path="users" element={<Home />}>
              <Route path=":slug" element={<UserDetails />} />
            </Route>
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
)
