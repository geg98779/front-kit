<template>
    <div class="w-full bg-white border-b border-zinc-200 px-2 py-1">
        <div class="flex items-center">
            <img 
            v-lazy
            class="h-4 cursor-pointer mr-2" src="@/assets/vue.svg" 
            @click="onToHome">      
            <header-search-vue class="mr-1"></header-search-vue>
            <header-theme-vue class="mr-1"></header-theme-vue>
            <header-my-vue></header-my-vue>
        </div>
    </div>
</template>

<script setup>
import headerMyVue from './header-my.vue'
import headerThemeVue from './header-theme.vue'
import headerSearchVue from './header-search/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
    
</style>