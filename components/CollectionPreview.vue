<template>
  <div class="collection-preview">
    <div class="collection-preview__title">{{ title }}</div>
    <div class="collection-preview__item-wrapper">
      <CollectionItem
        v-for="item in items"
        :key="item._id"
        :name="item.name"
        :price="item.price"
        :image-url="item.imageUrl"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.collection-preview {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  &__title {
    font-size: 28px;
    margin: 25px;
  }

  &__item-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
