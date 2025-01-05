<script setup>

</script>

<template>
  <h1>User</h1>

  <ul>
    <li>
      <RouterLink :to="{name: 'user-profile'}">Profile</RouterLink>
    </li>
    <li>
      <RouterLink :to="{name: 'user-order'}">Order</RouterLink>
    </li>
    <li>
      <RouterLink :to="{name: 'user-wishlist'}">Wishlist</RouterLink>
    </li>
  </ul>

  <RouterView/>
  <div>Put footer here</div>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
  font-weight: bold;
}
</style>