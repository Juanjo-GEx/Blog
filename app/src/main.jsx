import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { Posts, PostDetails }  from './views/Post'
import { Users, UserDetails } from './views/User'
import App from './App'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="posts/" element={<Posts />}>
              <Route path=":slug" element={<PostDetails />} />
            </Route>
            <Route path="users/" element={<Users />}>
              <Route path=":slug" element={<UserDetails />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route> 
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
)
