import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PromoService from '../../services/PromoService'
import './assets/style.css'
import './assets/img/oferta.jpg'

export default function Index() {
  const [promos, setPromos] = useState([])

  const getAllPromos = () => {
    PromoService.getAllPromos()
      .then(response => {
        setPromos(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getAllPromos()
  }, [])

  const deletePromo = promoId => {
    PromoService.deletePromo(promoId)
      .then(response => {
        getAllPromos()
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid banner3">
        <div className="container">
          <h1 className="display-4 text-white">Viage Mais!</h1>
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
      <div className="cards" />

      <table class="table">
        <thead>
          <tr>
            <td scope="col">Id</td>
            <td scope="col">Valor</td>
            <td scope="col">Cliente</td>
            <td scope="col">Destino</td>
            <td scope="col">Ações </td>
          </tr>
        </thead>
        <tbody>
          {promos.map(promo => (
            <tr key={promo.id_promo}>
              <td>{promo.id_promo}</td>
              <td>{promo.valor}</td>

              <td>{promo.cliente.nomeCliente}</td>
              <td>{promo.destino.nomeDestino}</td>
              <td>
                <Link to={`/Promo-Update/${promo.id_promo}`}>
                  <button className="btn btn-primary">Editar</button>
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => deletePromo(promo.id_promo)}
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
