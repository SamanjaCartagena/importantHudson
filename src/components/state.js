import {ref, computed} from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value =! collapsed.value)
export const toggleEnter =() =>collapsed.value=true
export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED= 55
export const sidebarWidth= computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED}px`
)