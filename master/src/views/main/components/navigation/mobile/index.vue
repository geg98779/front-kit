<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
        @click="onShowPopup"
      >
        <m-svg-icon class="w-2 h-2" name="hamburger" />
      </li>
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :ref="setItemRef"
        @click="onItemClick(index)"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisible">
      <menu-vue @onItemClick="onItemClick"></menu-vue>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

//选中item下标
const currentCategoryIndex = ref(0)

//获取所有的item元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
//数据改变后 dom元素更新之前触发
onBeforeUpdate(() => {
  itemRefs = []
})

// 获取ul元素
const ulTarget = ref(null)

// vueuse -> useScroll 获取响应式的scroll滚动距离
const { x: ulScrollLeft } = useScroll(ulTarget)

// watch监听
watch(currentCategoryIndex, (val) => {
  const { width, left } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    //滑块的位置 = ul横向移动的距离 + 当前元素的left - ul左侧padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})
// item点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisible.value = false
}

//控制popup组件
const isVisible = ref(false)
const onShowPopup = () => {
  isVisible.value = true
}
</script>

<style lang="scss" scoped>
</style>