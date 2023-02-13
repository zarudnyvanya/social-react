import { signOut } from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'
import styles from './isAuth.module.scss'
import { Link } from 'react-router-dom'

export const IsAuth = () => {
  const { user, ga } = useAuth()
  return (
    <div className={styles.auth}>
      <Link to="profile">
        <img className={styles.img} src={user?.avatar} alt="avatar" />
      </Link>
      <div className={styles.content}>
        <p className={styles.name}>{user?.name || 'no name'}</p>
        <button className={styles.btn} onClick={() => signOut(ga)}>
          Log out
        </button>
      </div>
    </div>
  )
}
