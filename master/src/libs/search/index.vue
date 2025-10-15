<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
  >
    <!-- search部分 -->
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        name="search"
        color="#707070"
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
      ></m-svg-icon>
      <!-- 输入框 -->
      <input
        type="text"
        class="block w-full h-[44px] pl-4 outline-0 duration-500 bg-zinc-100
         caret-zinc-400 rounded-xl text-zinc-400 tracking-wide
          text-sm font-semibold border border-zinc-100  focus:border-red-300
          group-hover:bg-white group-hover:border-zinc-200"
        placeholder="搜索" 
      />
      <!-- 删除按钮 -->
      <m-svg-icon name="input-delete" class="h-1.5 w-1.5 
      absolute translate-y-[-50%] top-[50%] right-9 
      cursor-pointer duration-500"></m-svg-icon>
      <!-- 分割线 -->
      <div class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%]
      right-[62px] duration-500 bg-zinc-300 group-hover:opacity-100"></div>
      <!-- 搜索按钮（通用组件） -->
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
        <div class="max-h-[368px] w-full text-base overflow-auto bg-white
        absolute z-20 top-[56px] left-0 p-2 rounded border border-zinc-200
        duration-200 hover:shadow-2xl">
        <!-- <slot name="dropdown" /> -->
    </div>
    </transition>
  </div>
</template>

<script>
const EMIT_UPDATA_MODEL_VALUE = 'update:modelValue'
// 搜索
const EMIT_SEARCH = 'search'
// 删除所有文本
const EMIT_CLEAR = 'clear'
// 输入事件
const EMIT_INPUT = 'input'
// 获取焦点
const EMIT_FOCUS = 'focus'
// 失去焦点
const EMIT_BLUR = 'blur'
export default {
  name: 'search'
}
</script>

<script setup>
/**
 * 1. 输入内容实现双向数据绑定
 * 2. 搜索按钮在 hover 时展示
 * 3. 一键清空文本功能
 * 4. 触发搜索
 * 5. 下拉展示区控制
 * 6. 事件处理
 */
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slider-leave-active {
  transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
