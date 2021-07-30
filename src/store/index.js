import { createStore } from "../Vuex";
const store = createStore({
    state: {
        age: 5
    },
    getters: {
        changeAge(state) {
            return state.age + 10
        }
    },
    mutations: {
        addAge(state, data) {
            state.age += data
        }
    },
    actions: {

    }
})
export default store