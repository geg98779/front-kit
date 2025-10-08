<template>
    <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryData"/>
</template>

<script setup>
import mobileNavigationVue from './mobile/index.vue'
import { isMobileTerminal } from '@/utils/flexible.js'
import {ref} from 'vue'
import { getCategory } from '@/api/category';

const categoryData = ref([])
const getCategoryData = async () => {
    const { categorys } = await getCategory()
    categoryData.value = categorys
}
getCategoryData()
</script>

<style lang="scss" scoped>
    
</style>