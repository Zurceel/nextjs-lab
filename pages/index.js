import { useState } from 'react'
import Pessoa from '../components/Pessoa'
import comAutorizacao from '../hoc/comAutorizacao'

function Home() {
  const [idadeGabriel, setIdadeGabriel] = useState(17)
  const pessoas = [
    {
      nomePessoa: 'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa: 25
    }, 
    {
      nomePessoa: 'Paulo',
      idadePessoa: 30
    }
  ]

  const IncrementaIdadeGabriel = () =>{
    setIdadeGabriel(++idadeGabriel)
  }

  return (
    <>
      <h1>Olá Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome="Gabriel" idade={idadeGabriel}/>
      <Pessoa nome="Geovanna" idade={21}/>

    {pessoas.map(({nomePessoa, idadePessoa}, index) => {
      return <Pessoa 
      nome={nomePessoa} 
      idade={idadePessoa} 
      key={index}
      />
    })}

      <button onClick={IncrementaIdadeGabriel}>Incrementa a idade do Gabriel</button>
    </>
  )
}

export default comAutorizacao(Home)
