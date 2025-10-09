/**
 * 判断当前设备是否为移动端设备
 */
import { PC_DEVICE_WIDTH } from "../constants";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize()

export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态计算rem基准值 根据用户设备屏幕宽度来计算 并把结果赋给html根标签作为fontSize大小
 */

export const useREM = () => {
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html')
        let fontSize = window.innerWidth / 10
        fontSize = MAX_FONT_SIZE < fontSize? MAX_FONT_SIZE : fontSize
        html.style.fontSize = fontSize + 'px'
    })
}
