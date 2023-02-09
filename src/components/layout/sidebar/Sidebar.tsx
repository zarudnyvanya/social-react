import React, { FC } from 'react'
import styles from './Sidebar.module.scss'
import { UserItem } from './userItem/UserItem'
import { Menu } from './menu/Menu/Menu'
import { UserItems } from './UserItems/UserItems'

export const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <UserItems />
      <Menu />
    </div>
  )
}
