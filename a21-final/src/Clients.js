import React, { useEffect, useState } from 'react'
import ClientList from './ClientList'
import ClientService from './ClientService'
import FetchButton from './FetchButton';

const Clients = () => {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    const getClientList = async() => {
      const clientList = await ClientService.fetchAllClients()
      setClients(clientList)
    }
    getClientList()
  }, [])

  const fetchAllClients = async () => {
    const clients = await ClientService.fetchAllClients()
    setClients(clients)
  }

  const fetchMaleClients = async () => {
    const males = await ClientService.fetchMaleClients()
    setClients(males)
  }

  const fetchOntarianClients = async () => {
    const ontarians = await ClientService.fetchOntarianClients()
    setClients(ontarians)
  }

  return (
    <div>
      <FetchButton callback={fetchAllClients} text="Fetch tous les clients" />
      <FetchButton callback={fetchMaleClients} text="Fetch hommes" />
      <FetchButton callback={fetchOntarianClients} text="Fetch ontariens" />
      <ClientList clients={clients} />
    </div>
  )
}

export default Clients
