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