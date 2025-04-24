<script setup lang="ts">
interface Props {
    title: string
}
defineProps<Props>()
</script>

<template>
  <div style="margin: 10px;">{{ title }}</div>
</template>

<style scoped>
</style>
