
import data from '~~/store/data.json'
const services = data
export const state = () => ({
  services: [],
  modal: false,
  currentDetail: {}

})

export const mutations = {
  SET_SERVICES_LIST (state, services) {
    state.services = services
  },
  // OPEN_MODAL (state, payload) {
  //   state.modal = payload
  // },
  CLOSE_MODAL (state, payload) {
    state.modal = payload
  },
  SET_CURRENT_DETAIL (state, detail) {
    state.currentDetail = services.find(item => item.id === detail) 
    state.modal = true
    console.log(this.state.modal)
  }
}



export const actions = {
  async getCatalog ({ commit }) {
    try {
      await commit('SET_SERVICES_LIST', services)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
  // async getCurrentDetail ({ commit }, {route}) {
  //   await sleep(1000)
  //   const detail = vehicles.find((detail) => detail.name === route.params.DetailPage)
  //   await commit('SET_CURRENT_DETAIL', detail)
  // }
  }