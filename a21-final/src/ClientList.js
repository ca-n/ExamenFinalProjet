import React from 'react'

const ClientList = ({ clients }) => {
  return (
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Genre</th>
            <th>Date de Naissance</th>
          </tr>
        </thead>
        <tbody>
          {clients !== undefined && clients.length > 0 ? clients.map(client => 
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.gender}</td>
              <td>{client.birthDate}</td>
            </tr>
          ) : <tr><td colSpan="3">Aucun clients a afficher</td></tr>}
        </tbody>
    </table>
  )
}

export default ClientList
