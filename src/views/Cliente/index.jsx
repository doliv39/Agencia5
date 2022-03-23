import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ClienteService from '../../services/ClienteService'
import './assets/style.css'

export default function Index() {
  const [clientes, setClientes] = useState([])

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

  const deleteCliente = clienteId => {
    ClienteService.deleteCliente(clienteId)
      .then(response => {
        getAllClientes()
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <Link to="/Cliente-Create">
        <button type="button" class="btn btn-dark banner3">
          Cadastrar novo cliente aqui!
        </button>
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id_cliente}>
              <td>{cliente.id_cliente}</td>

              <td>{cliente.nomeCliente}</td>

              <td>
                <Link to={`/Cliente-Update/${cliente.id_cliente}`}>
                  <button className="btn btn-primary">Editar</button>
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => deleteCliente(cliente.id_cliente)}
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
