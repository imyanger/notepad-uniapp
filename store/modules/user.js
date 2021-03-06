import API from '@/utils/api'

const state = {
  userInfo: {}
}

const getters = {
	getUserInfo(state){
		return state.userInfo;
	}
}

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async login({ commit }, loginUser) {
    const data = await API.login(loginUser)
    commit('setUserInfo', data)
  },
  async register({ commit }, loginUser) {
    const data = await API.register(loginUser)
    commit('setUserInfo', data)
  },
  async logout({ commit, state }) {
    // const data = await API.logout()
    commit('setUserInfo', null)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
