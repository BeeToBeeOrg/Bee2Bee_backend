import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  }
}
export const getters = {
  login(state){
    return state.isAuthenticated;
  } 
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)
      return user
    } catch (e) {
      commit('set', null)
    }
  },
  async register(_, {email, password}) {
    console.log("email inside register", email);
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    })
    console.log(user)
    return user
  },
  async confirm(_, {email, code}) {
    console.log("code:",code);
    return await Auth.confirmSignUp(email, code)
  }, 
  async login({commit}, {userdata}) {
    console.log(userdata)
    const user = await Auth.signIn(userdata.email, userdata.pwd)
    commit('set', user)
    return user
  },
  async logout({commit}) {
    await Auth.signOut()
    commit('set', null)
  },
}
