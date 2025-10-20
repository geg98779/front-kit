import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import createPersistedstate from 'vuex-persistedstate'

const store = createStore({
    getters,
    modules: {
        category,
        theme,
    },
    plugins: [
        createPersistedstate({
            key: 'front-kit',
            paths: ['category', 'theme']
        })
    ]
})

export default store