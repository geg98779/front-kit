import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'
const store = createStore({
    getters,
    modules: {
        category
    },
    plugins: [
        createPersistedstate({
            key: 'front-kit',
            paths: ['category']
        })
    ]
})

export default store