import React, { useState, useEffect } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import ClienteService from '../../services/ClienteService'

export default function Create() {
  const [nomeCliente, setNomeCliente] = useState('')

  const { id } = useParams()

  const navigate = useNavigate()

  const criarOuEditarCliente = e => {
    e.preventDefault()

    const cliente = { nomeCliente }

    if (id) {
      ClienteService.updateCliente(id, cliente).then(response => {
        navigate('/Cliente')
      })
    } else {
      ClienteService.createCliente(cliente).then(response => {
        navigate('/Cliente')
      })
    }
  }

  useEffect(() => {
    function getClienteById() {
      if (id) {
        ClienteService.getClienteById(id)

          .then(response => {
            setNomeCliente(response.data.nomeCliente)
          })

          .catch(error => {
            console.log(error)
          })
      }
    }

    getClienteById()
  }, [id])

  return (
    <>
      <h1>{id ? 'Editar Cliente' : 'Novo Cliente'}</h1>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nome do cliente
          </label>
          <input
            type="text"
            class="form-control"
            id="nomeCliente"
            aria-describedby="nomeCliente"
            value={nomeCliente}
            onChange={e => setNomeCliente(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            Insira o nome do cliente
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          value="Enviar"
          onClick={e => criarOuEditarCliente(e)}
        >
          Enviar
        </button>
        <Link to="/Cliente">
          <button type="submit" class="btn btn-primary" value="Cancelar">
            Cancelar
          </button>
        </Link>
      </form>
    </>
  )
}
