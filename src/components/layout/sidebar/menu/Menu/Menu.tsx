import { MenuItem } from '../MenuItem'
import { menu } from '../dataMenu'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <div className={styles.menu}>
      {menu.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </div>
  )
}
