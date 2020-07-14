<template>
  <CollectionPreview
    :title="currentCollection.title"
    :items="currentCollection.items"
  />
</template>

<script>
export default {
  computed: {
    currentCollection() {
      const { slug } = this.$route.params
      return this.$store.getters['shop/currentCollection'](slug)
    },
  },
}
</script>
