import React from 'react'
import styles from './AuthError.module.scss'

type Props = {
  children: any
}

export const AuthError = ({ children }: Props) => {
  return <div className={styles.error}>{children}</div>
}
