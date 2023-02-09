import styles from './Search.module.scss'
import searchLogo from '../../../assets/search.png'

export const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" className={styles.search__input} />
      <img className={styles.search__logo} src={searchLogo} alt={searchLogo} />
    </div>
  )
}
