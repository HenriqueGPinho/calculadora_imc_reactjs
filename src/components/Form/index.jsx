import styles from './Form.module.css'

export default function Form({ altura, peso, botaoForm }) {
  return (
    <div className="container">
      <form onSubmit={botaoForm} className={styles.form}>
        <input className={styles.input} onChange={altura} type="number" placeholder="sua altura (cm)" />
        <input className={styles.input} onChange={peso} type="number" placeholder="seu peso (kg)" />
        <button type='submit' className={styles.button}> calcular </button>
      </form>
    </div>
  )
}