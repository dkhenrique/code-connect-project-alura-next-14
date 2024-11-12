
import styles from './subheading.module.css'

export const SubHeading = ({ children }) => {
  return (
    <h2 className={styles.subheading}>{children}</h2>
  )
}