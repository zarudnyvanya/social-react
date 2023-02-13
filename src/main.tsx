import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/home/Home'
import { Header } from './components/layout/header/Header'
import { Profile } from './pages/profile/Profile'
import { Messages } from './pages/messages/Messages'
import { Friends } from './pages/friends/Friends'
import { Auth } from './pages/auth/Auth'
import { initializeApp } from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider'
import { useAuth } from './components/providers/useAuth'

const firebaseConfig = {
  apiKey: 'AIzaSyBLIC19TkOUNHXOaigeBTO8KmIAZRkRhlA',
  authDomain: 'social-react-7c536.firebaseapp.com',
  projectId: 'social-react-7c536',
  storageBucket: 'social-react-7c536.appspot.com',
  messagingSenderId: '612203566880',
  appId: '1:612203566880:web:54490894c6f639aafaa945',
}

const app = initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)
