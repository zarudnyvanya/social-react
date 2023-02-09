import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'

type Props = {
  title: string
  link: string
  icon: string
}

export const MenuItem = ({ title, icon, link }: Props) => {
  return (
    <Link to={link}>
      <div className={styles.item}>
        <img className={styles.item__logo} src={icon} alt={icon} />
        <span className={styles.item__title}>{title}</span>
      </div>
    </Link>
  )
}
