import styles from './Form.module.css'

function Form() {
  return (
    <div className="container">
      <form className={styles.form}>
        <input className={styles.input} type="number" placeholder="sua altura (em metros)" />
        <input className={styles.input} type="number" placeholder="seu peso (em quilogramas)" />
      </form>
    </div>
  )
}

export default Form