import styles from './UserItem.module.scss'
import userLogo from './../../../../assets/userLogo.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'

type Props = {
  _id: string
  name: string
  avatar: string
  link: string
  isInNetwork: boolean
}

export const UserItem = ({ name, avatar, isInNetwork, link, _id }: Props) => {
  return (
    <Link to={`${link}/${_id}`}>
      <div className={styles.user}>
        <div className={styles.user__content}>
          <div>
            {isInNetwork && <div className={styles.user__active}></div>}
            <img className={styles.user__logo} src={avatar} alt="user logo" />
          </div>
          <p className={styles.user__title}>{name}</p>
        </div>
        <div className={styles.user__message}></div>
      </div>
    </Link>
  )
}
