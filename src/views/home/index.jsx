import React from 'react'
import './assets/style.css'

const Home = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid banner">
        <div className="container">
          <h1 className="display-4 text-white">
            Não Perca essa oportunidade!!
          </h1>
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
    </>
  )
}

export default Home
