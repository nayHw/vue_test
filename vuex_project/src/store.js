
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items:['item1','item2','items3'],
    },
    getters:{
        getLocalStorageData(){
            localStorage.getItem('items').split(',')
        }
    },
    mutations: {
        addList(state, newItem){
            state.items.push(newItem)
            localStorage.setItem('items',state.items)
        },
        delItem(state, index){
            state.items.splice(index,1)
            localStorage.setItem('items',state.items)
        }
    },
    actions: {
        addList({commit}, newItem){
            commit('addList', newItem)
        },
        delItem({commit}, index){
            commit('delItem', index)
        }
    }
})