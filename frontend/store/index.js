export const state = () => ({
    user: {},
    positions:{
        profile: true,
        company: false,
        team: false,
    }
})

export const mutations = {
    updateUser(state, payload){
        this.state.user = payload
    },
    update_position(state, payload){
        this.state.positions = payload.positions
    }
}

export const actions = {
    async add_user ({ commit }, payload) {
        console.log('user', payload)
          await this.$axios.$post("http://localhost:5000/users", {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.emial,
          passwort: payload.pwd,
        }).then((response)=>{
            console.log("response db: ",response);
            commit('updateUser', payload)
        }).catch((err)=>{
            console.log("error db: ",err);
        });
        
    },
    async add_company ({ commit }, payload) { // TODO: Add user id to company profile
        console.log('company', payload)
          await this.$axios.$post("http://localhost:5000/companies", {
              name: payload.company_name,
              location:{
                  address:payload.company_addr,
                  post_code:payload.company_postCode
              },
              employees: payload.employees
        }).then((response)=>{
            console.log("response db: ",response);
            commit('updateUser', payload)
        }).catch((err)=>{
            console.log("error db: ",err);
        });
        
    },
}

export const getters = {
    get_user(state) {
        return state.user;
    },
    get_sidebar_position(state){
        return state.positions;
    }
}
