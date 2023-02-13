import React, { FC } from 'react'
import styles from './Header.module.scss'
import { Search } from '../search/Search'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'
import { IsAuth } from '../IsAuth/IsAuth'

export const Header: FC = () => {
  const { user } = useAuth()

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__content}>
          <h2 className={styles.header__logo}>BFA</h2>
        </div>
      </Link>
      <Search />

      {user ? <IsAuth /> : <h3 className={styles.auth}>😏</h3>}
    </div>
  )
}
