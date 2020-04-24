export const state = () => ({
  first_login: false
})

export const mutations = {
  firtsLogin(state, payload) {
    state.first_login = payload
  }
}
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
