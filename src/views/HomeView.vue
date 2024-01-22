<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile'
import TheWelcome from '../components/TheWelcome.vue'

const { isMobile: isMobile500 } = useIsMobile(500)
</script>

<template>
  <main :class="{ 'is-mobile-500': isMobile500 }">
    <TheWelcome />
  </main>
</template>
