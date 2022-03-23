import axios from 'axios'

const PROMO_API_URL = 'http://localhost:8080/promos'

class PromoService {
  getAllPromos() {
    return axios.get(PROMO_API_URL)
  }

  createPromos(promo) {
    return axios.post(PROMO_API_URL, promo)
  }

  getPromoById(promoId) {
    return axios.get(PROMO_API_URL + '/' + promoId)
  }

  updatePromos(promoId, promo) {
    return axios.put(PROMO_API_URL + '/' + promoId, promo)
  }

  deletePromos(promoId) {
    return axios.delete(PROMO_API_URL + '/' + promoId)
  }
}

export default new PromoService()
