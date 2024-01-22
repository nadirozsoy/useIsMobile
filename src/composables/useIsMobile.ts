import { computed, onMounted, ref } from 'vue'

export default function useIsMobile(initialWidth: number = 992) {
  const isMobileRef = ref<boolean>(window.matchMedia(`(max-width: ${initialWidth}px)`).matches)

  function setIsMobile(value: boolean) {
    isMobileRef.value = value
  }

  const isMobile = computed(() => isMobileRef.value) as any

  onMounted(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${initialWidth}px)`)
    const handler = () => setIsMobile(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', handler)
    return () => mediaQueryList.removeEventListener('change', handler)
  })

  return {
    isMobile,
    setIsMobile
  }
}
