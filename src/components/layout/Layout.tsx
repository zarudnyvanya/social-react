import React from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { useAuth } from '../providers/useAuth'
import { Auth } from '../../pages/auth/Auth'

type Props = {
  children: any
}

export const Layout = ({ children }: Props) => {
  const { user } = useAuth()
  return (
    <>
      <Header />
      {!user ? (
        <Auth />
      ) : (
        <div className="container">
          <Sidebar />
          {children}
        </div>
      )}
    </>
  )
}
