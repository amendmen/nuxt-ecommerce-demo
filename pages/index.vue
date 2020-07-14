<template>
  <div class="homepage">
    <div class="directory">
      <MenuItem
        v-for="item in sections"
        :key="item._id"
        :title="item.title"
        :image-url="item.imageUrl"
        :link-url="item.linkUrl"
        :size="item.size || 'small'"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '~/components/MenuItem'

export default {
  components: {
    MenuItem,
  },
  computed: {
    sections() {
      return this.$store.state.shop.sections
    },
  },
}
</script>

<style>
.directory {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
