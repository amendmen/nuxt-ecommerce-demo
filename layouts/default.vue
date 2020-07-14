<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
