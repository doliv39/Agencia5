import axios from 'axios'

const DESTINO_API_URL = 'http://localhost:8080/destinos'

class DestinoService {
  getAllDestinos() {
    return axios.get(DESTINO_API_URL)
  }

  createDestinos(destino) {
    return axios.post(DESTINO_API_URL, destino)
  }

  getDestinoById(destinoId) {
    return axios.get(DESTINO_API_URL + '/' + destinoId)
  }

  updateDestinos(destinoId, destino) {
    return axios.put(DESTINO_API_URL + '/' + destinoId, destino)
  }

  deleteDestinos(destinoId) {
    return axios.delete(DESTINO_API_URL + '/' + destinoId)
  }
}

export default new DestinoService()
