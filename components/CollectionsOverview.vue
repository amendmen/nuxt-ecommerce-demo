<template>
  <div class="collections-overview">
    <CollectionPreview
      v-for="collection in items"
      :key="collection.id"
      :title="collection.title"
      :items="collection.items.slice(0, 4)"
    />
  </div>
</template>

<script>
import CollectionPreview from '~/components/CollectionPreview'

export default {
  components: {
    CollectionPreview,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
