const url = "http://localhost:8080/client"
const ClientService = {
    fetchAllClients: async () => {
        const res = await fetch(url)
        return ClientService._checkResponse(res)
    },

    fetchMaleClients: async () => {
        const res = await fetch(url + "/gender/M")
        return ClientService._checkResponse(res)
    },

    fetchOntarianClients: async () => {
        const res = await fetch(url + "/province/ON")
        return ClientService._checkResponse(res)
    },

    _checkResponse: async (res) => {
        if (res.ok) {
            return await res.json()
        } else {
            console.error(`Error ${res.status}: ${res.text()}`)
            return []
        }
    }
}

export default ClientService