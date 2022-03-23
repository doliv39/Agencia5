import React, { useState, useEffect } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import DestinoService from '../../services/ClienteService'

export default function Create() {
  const [nomeDestino, setNomeDestino] = useState('')

  const { id } = useParams()

  const navigate = useNavigate()

  const criarOuEditarDestino = e => {
    e.preventDefault()

    const destino = { nomeDestino }

    if (id) {
      DestinoService.updateDestino(id, destino).then(response => {
        navigate('/Destino')
      })
    } else {
      DestinoService.createDestino(destino).then(response => {
        navigate('/Destino')
      })
    }
  }

  useEffect(() => {
    function getDestinoById() {
      if (id) {
        DestinoService.getDestinoById(id)

          .then(response => {
            setNomeDestino(response.data.nomeDestino)
          })

          .catch(error => {
            console.log(error)
          })
      }
    }

    getDestinoById()
  }, [id])

  return (
    <>
      <h1>{id ? 'Editar Destino' : 'Novo Destino'}</h1>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nome do destino
          </label>
          <input
            type="text"
            class="form-control"
            id="nomeDestino"
            aria-describedby="nomeDestino"
            value={nomeDestino}
            onChange={e => setNomeDestino(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            Insira o destino
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          value="Enviar"
          onClick={e => criarOuEditarDestino(e)}
        >
          Enviar
        </button>
        <Link to="/Destino">
          <button type="submit" class="btn btn-primary" value="Cancelar">
            Cancelar
          </button>
        </Link>
      </form>
    </>
  )
}
