import styles from './Result.module.css'

function Result() {
  return (
    <div className="container">
      <div className={styles.results}>
        <span className={styles.result}>O seu IMC calculado é de ...</span>
        <span className={styles.result}>De acordo com a tabela de referência ...</span>
      </div>
    </div>
    
  )
}

export default Result