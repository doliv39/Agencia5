import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DestinoService from '../../services/DestinoService'

import './assets/style.css'
import './assets/img/brasilia.jpg'
import Amazonia from './assets/img/amazonas.jpg'
import Bahia from './assets/img/bahia.jpg'
import Ceara from './assets/img/ceara.jpg'
import Maranhão from './assets/img/maranhão.jpg'
import Rgn from './assets/img/rio grande do norte.jpg'
import Rgs from './assets/img/rio grande do sul.jpg'
import Card from './components/Card'

export default function Index() {
  const [destinos, setDestinos] = useState([])

  const getAllDestinos = () => {
    DestinoService.getAllDestinos()
      .then(response => {
        setDestinos(response.data)

        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getAllDestinos()
  }, [])

  const deleteDestino = destinoId => {
    DestinoService.deleteDestino(destinoId)
      .then(response => {
        getAllDestinos()
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <div className="jumbotron jumbotron-fluid banner2">
        <div className="container">
          <h1 className="display-4 text-white">Menos Rotina e mais Roteiro!</h1>
          <p className="lead text-white">Venha viajar com agente!!!</p>
        </div>
      </div>
      <div class="py-20 py-lg-32 bg-light">
        <div class="container max-w-screen-xl">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h5 class="h5 mb-5 pt-3 text-uppercase text-primary">
                Vem com agente!!!
              </h5>

              <h1 class="ls-tight font-bolder mb-5">
                A melhor viagem sempre é a próxima.
              </h1>
              <p class="lead mb-10">
                Que a sua viagem para a praia seja incrível!
              </p>
              <div class="mx-n2 pb-3">
                <a
                  href="#"
                  className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8"
                >
                  Vamos Juntos?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <Card
          image={Ceara}
          title="Ceara"
          price="R$ 950,00"
          desc="A Terra do Sol"
        />
        <Card
          image={Amazonia}
          title="Amazonia"
          price="R$ 1850,00"
          desc="Conheça a maior floresta do mundo"
        />
        <Card
          image={Bahia}
          title="Bahia"
          price="R$ 850,00"
          desc="Venha comer acarajé!"
        />
        <Card
          image={Maranhão}
          title="Maranhão"
          price="R$ 1250,00"
          desc="Essas dunas não tem igual..."
        />
        <Card
          image={Rgn}
          title="Rio Grande do Norte"
          price="R$ 1150,00"
          desc="Viagem Inesquecivel"
        />
        <Card
          image={Rgs}
          title="Rio Grande do Sul"
          price="R$ 850,00"
          desc="Belezas do Sul"
        />
      </div>
      <Link to="/Destino-Create">
        <button type="button" class="btn btn-dark">
          Cadastrar novo destino aqui!
        </button>
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Destino</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>

        <tbody>
          {destinos.map(destino => (
            <tr key={destino.id_destino}>
              <td>{destino.id_destino}</td>

              <td>{destino.nomeDestino}</td>

              <td>
                <Link to={`/Destino-Update/${destino.id_destino}`}>
                  <button className="btn btn-primary">Editar</button>
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => deleteDestino(destino.id_destino)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
