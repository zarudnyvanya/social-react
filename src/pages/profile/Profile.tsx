import { useAuth } from '../../components/providers/useAuth'
import styles from './Profile.module.scss'

export const Profile = () => {
  const { user } = useAuth()

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Your profile</h1>
      <img className={styles.avatar} src={user?.avatar} alt="avatar" />
      <h1 className={styles.name}>{user?.name}</h1>
      {/* {user?.isInNetwork ? <span>Online</span> : <span>Offline</span>} */}
    </div>
  )
}
