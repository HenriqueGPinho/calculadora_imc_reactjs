import styles from './Result.module.css'

export default function Result({ valorIMC, classificacao }) {
  if (!valorIMC) {
    return (
      <div className="container">
          <span className={styles.result}>O seu resultado aparecerá aqui.</span>
      </div> 
    )
  } else {
    return (
      <div className="container">
        <div className={styles.results}>
          <span className={styles.result}>O seu IMC calculado é de <b>{valorIMC}</b></span>
          <span className={styles.result}>De acordo com a tabela de referência, seu IMC é classificado como <b>{classificacao}</b></span>
        </div>
      </div>
    )
  }
}