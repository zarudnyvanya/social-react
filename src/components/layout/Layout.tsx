import React from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

type Props = {
  children: any
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        {children}
      </div>
    </>
  )
}
