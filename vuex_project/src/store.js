
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items:[],
    },
    getters:{
        getLocalStorageData(state){
            return state
        }
    },
    mutations: {
        addList(state, newItem,){
            state.items.push(newItem)
        },
        delItem(state, index){
            state.items.splice(index,1)
        }
    },
    actions: {
        addList({commit}, newItem) {
            commit('addList', newItem)
        },
        delItem({commit}, index){
            commit('delItem', index)
        }
    }
})