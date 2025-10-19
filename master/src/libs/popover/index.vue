<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div>
      <!-- 具名插槽：用于触发弹层 -->
      <slot name="reference" />
    </div>
    <!-- 气泡展示 -->
    <transition>
      <div
        v-show="isVisible"
        class="absolute p-1 z-20 bg-white border rounded-md"
      >
        <!-- 匿名插槽：用于展示弹出层的内容 -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const onMouseenter = () => {
  isVisible.value = true
  console.log('aklsdjfkaj')
}

const onMouseleave = () => {
  isVisible.value = false
  console.log('leave')
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slider-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
