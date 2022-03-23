import React, { useState, useEffect } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import ClienteService from '../../services/ClienteService'
import DestinoService from '../../services/DestinoService'
import PromoService from '../../services/PromoService'

export default function Create() {
  const [valor, setValor] = useState('')

  const [cliente, setCliente] = useState({ id_cliente: '', nomeCliente: '' })
  const [destino, setDestino] = useState({ id_destino: '', nomeDestino: '' })
  const [clientes, setClientes] = useState([])
  const [destinos, setDestinos] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then(response => {
        setClientes(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getAllClientes()
  }, [])

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

  const criarOuEditarPromo = e => {
    e.preventDefault()

    const promo = {
      valor,
      cliente,
      destino
    }
    console.log(promo)

    if (id) {
      PromoService.updatePromo(id, promo).then(response => {
        navigate('/Promo')
      })
    } else {
      PromoService.createPromo(promo).then(response => {
        navigate('/Promo')
      })
    }
  }

  useEffect(() => {
    function getPromoById() {
      if (id) {
        PromoService.getPromoById(id)
          .then(response => {
            setValor(response.data.valor)
            setCliente({
              id_cliente: response.data.cliente.id_cliente,
              nomeCliente: response.data.cliente.nomeCliente
            })
            setDestino({
              id_destino: response.data.destino.id_destino,
              nomeDestino: response.data.destino.nomeDestino
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
    getPromoById()
  }, [id])

  return (
    <>
      <h1>{id ? 'Editar Promoção' : 'Nova Promoção'}</h1>

      <form>
        <div class="mb-3">
          <label for="valor" class="form-label">
            Valor
          </label>
          <input
            type="text"
            class="form-control"
            id="valor"
            aria-describedby="valor"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />

          <label for="nomeCliente" class="form-label">
            Cliente
          </label>
          <select
            class="form-select"
            id="cliente"
            name="Cliente"
            onChange={e =>
              setCliente({ id_cliente: Number.parseInt(e.target.value) })
            }
          >
            <option value="DEFAULT">
              {id ? cliente.nomeCliente : 'Selecionar cliente'}
            </option>

            {clientes.map(cliente => (
              <option key={cliente.id_cliente} value={cliente.id_cliente}>
                {cliente.nomeCliente}
              </option>
            ))}
          </select>

          <br />

          <label for="nome" class="form-label">
            Destino
          </label>
          <select
            class="form-select"
            id="destino"
            name="Destino"
            onChange={e =>
              setDestino({ id_destino: Number.parseInt(e.target.value) })
            }
          >
            <option value="DEFAULT">
              {id ? destino.nomeDestino : 'Escolha seu destino'}
            </option>
            {destinos.map(destino => (
              <option key={destino.id_destino} value={destino.id_destino}>
                {destino.nomeDestino}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          value="Enviar"
          onClick={e => criarOuEditarPromo(e)}
        >
          Enviar
        </button>
        <Link to="/Promo">
          <button type="submit" class="btn btn-primary" value="Cancelar">
            Cancelar
          </button>
        </Link>
      </form>
    </>
  )
}
