<script setup>
const {title} = defineProps({
  title: String
})
</script>

<template>
  <h1>{{ title}}</h1>
  <p>This is home page!</p>
  <RouterLink to="/users">User</RouterLink>
</template>

<style scoped>

</style>