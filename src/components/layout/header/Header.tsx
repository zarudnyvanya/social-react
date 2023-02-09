import React, { FC } from 'react'
import styles from './Header.module.scss'
import { Search } from '../search/Search'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__content}>
          <h2 className={styles.header__logo}>BFA</h2>
        </div>
      </Link>
      <Search />

      <Link to="auth">
        <h3 className={styles.auth}>huy</h3>
      </Link>
    </div>
  )
}
