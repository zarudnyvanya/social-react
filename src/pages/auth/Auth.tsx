import { SyntheticEvent, useState } from 'react'
import { IUserData } from './types'
import closeIcon from './../../assets/closeIcon.png'
import styles from './Auth.module.scss'
import { Link } from 'react-router-dom'

export const Auth = () => {
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  })
  const handleLogin = (e: any) => {
    e.preventDefault()
    console.log(userData)

    setUserData({
      email: '',
      password: '',
    })
  }

  return (
    <>
      <div className={styles.overlay}></div>
      <form onSubmit={handleLogin} className={styles.auth}>
        <div className={styles.auth__header}>
          <div className={styles.auth__title}>Login</div>
          <div className={styles.auth__close}>
            <Link to="/">
              <img src={closeIcon} alt="closeIcon" />
            </Link>
          </div>
        </div>

        <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          type="email"
          placeholder="Enter your email"
          className={styles.auth__email}
          value={userData.email}
        />
        <input
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          type="password"
          placeholder="Enter your password"
          className={styles.auth__pass}
          value={userData.password}
        />
        <button type="submit" className={styles.auth__btn}>
          Log in
        </button>
      </form>
    </>
  )
}
