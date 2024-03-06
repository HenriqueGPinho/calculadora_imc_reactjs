import styles from './Header.module.css'

function Header() {
  return (
    <div className="container">
      <h1 className={styles.title}>Calculadora de IMC</h1>
    </div>
  )
}

export default Header