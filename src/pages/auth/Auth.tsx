import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { IUserData } from './types'
import closeIcon from './../../assets/closeIcon.png'
import styles from './Auth.module.scss'
import { Link } from 'react-router-dom'
import { AuthError } from './AuthError/AuthError'
import { useAuth } from '../../components/providers/useAuth'

export const Auth = () => {
  const { ga, user } = useAuth()
  console.log('user', user)

  const [isRegForm, setIsRegform] = useState(false)
  const [error, setError] = useState('')
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
    name: '',
  })
  const handleLogin = async (e: any) => {
    e.preventDefault()

    const auth = getAuth()
    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(ga, userData.email, userData.password)
        await updateProfile(res.user, {
          displayName: userData.name,
        })
      } catch (error: any) {
        setError(error.message)
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password)
      } catch (error: any) {
        setError(error.message)
      }
    }

    setUserData({
      email: '',
      password: '',
      name: '',
    })
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return (
    <>
      <div className={styles.overlay}></div>

      <form onSubmit={handleLogin} className={styles.auth}>
        {error && <AuthError>{error}</AuthError>}
        <div className={styles.auth__header}>
          <div className={styles.auth__title}>Login</div>
          <div className={styles.auth__close}>
            <Link to="/">
              <img src={closeIcon} alt="closeIcon" />
            </Link>
          </div>
        </div>

        <input
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          type="text"
          placeholder="Enter your name"
          className={styles.auth__email}
          value={userData.name}
        />

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
        <button onClick={() => setIsRegform(false)} type="submit" className={styles.auth__btn}>
          Log in
        </button>
        <button
          style={{ marginTop: 15 }}
          onClick={() => setIsRegform(true)}
          type="submit"
          className={styles.auth__btn}>
          Register
        </button>
      </form>
    </>
  )
}
