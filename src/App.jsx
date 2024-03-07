import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import Result from "./components/Result"

export default function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [IMC, setIMC] = useState(0)
  const [classificacaoIMC, setClassificacaoIMC] = useState('')

  function mudaAltura(e) {
    setAltura(e.target.value)
  }

  function mudaPeso(e) {
    setPeso(e.target.value)
  }

  function calculaIMC() {
    setIMC((peso/((altura/100)*(altura/100))).toFixed(1))
    return peso/((altura/100)*(altura/100))
  }

  function classificaIMC() {
    const IMC = calculaIMC()

    if (IMC < 18.5) setClassificacaoIMC('abaixo do peso')
    else if (IMC >= 18.5 && IMC < 25) setClassificacaoIMC('peso normal')
    else if (IMC >= 25 && IMC < 30) setClassificacaoIMC('sobrepeso')
    else if (IMC >= 30 && IMC < 35) setClassificacaoIMC('obesidade de grau I')
    else if (IMC >= 35 && IMC < 40) setClassificacaoIMC('obesidade de grau II')
    else if (IMC >= 40) setClassificacaoIMC('obesidade de grau III')
  }

  function submeteForm(e) {
    e.preventDefault()
    calculaIMC()
    classificaIMC()
  }


  return (
    <>
      <Header />
      <Form 
        altura={mudaAltura}
        peso={mudaPeso}
        botaoForm={submeteForm}
      />
      <Result valorIMC={IMC} classificacao={classificacaoIMC}/>
    </>
  )
}