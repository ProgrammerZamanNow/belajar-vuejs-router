<script setup>

</script>

<template>
  <h1>User</h1>
  <RouterView name="header"/>
  <RouterView v-slot="{Component}">
    <component :is="Component" :request-id="$route.query.requestId"/>
  </RouterView>
  <RouterView name="footer"/>
</template>

<style scoped>
</style>