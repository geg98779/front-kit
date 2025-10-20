import { ALL_CATEGORY_ITEM } from '@/constants'
import { getCategory } from '@/api/category'

/*
 *** 处理 navigationbar 中的数据 categorys
 */

export default {
    //独立作用域
    namespaced: true,
    state: () => {
        return {
            categorys: [ALL_CATEGORY_ITEM]
        }
    },
    mutations: {
        /**
         * 为categorys 赋值
         */
        setCategorys(state, newCategorys){
            state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
        }
    },
    actions: {
        /**
         * 获取 category 数据, 并自动保存到vuex中
         */
        async useCategoryData(context){
            const { categorys } = await getCategory()
            context.commit('setCategorys', categorys)
        }
    }
}