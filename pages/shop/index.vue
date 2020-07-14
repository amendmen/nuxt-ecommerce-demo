<template>
  <CollectionsOverview :items="collections" />
</template>

<script>
export default {
  computed: {
    collections() {
      return this.$store.state.shop.collections
    },
  },
}
</script>
