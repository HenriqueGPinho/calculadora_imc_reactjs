import styles from './Header.module.css'

export default function Header() {
  return (
    <div className="container">
      <h1 className={styles.title}>Calculadora de IMC</h1>
    </div>
  )
}