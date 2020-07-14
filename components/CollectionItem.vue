<template>
  <div class="collection-item">
    <div class="collection-item__img" :style="imgStyle"></div>
    <div class="collection-item__footer">
      <div class="collection-item__name">{{ name }}</div>
      <div class="collection-item__price">${{ price }}</div>
      <div class="collection-item__btn-wrapper">
        <div class="collection-item__btn-add" @click="onAddToCart">
          Add to cart
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addToCart from '~/mixins/addToCart'

export default {
  mixins: [addToCart],
  props: {
    itemId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgStyle() {
      return { backgroundImage: `url(${this.imageUrl}) ` }
    },
  },
  methods: {
    onAddToCart() {
      const item = {
        id: this.itemId,
        name: this.name,
        price: this.price,
        imageUrl: this.imageUrl,
      }

      this.addToCart(item)
    },
  },
}
</script>

<style lang="scss">
.collection-item {
  width: 22vw;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &__img {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  &:hover &__img {
    opacity: 0.8;
  }

  &__footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }

  &__name {
    margin-bottom: 15px;
  }

  &__btn-wrapper {
    position: absolute;
    top: 255px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__btn-add {
    opacity: 0.7;
    display: none;
    border: 1px solid #000;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #fff;
    font-size: 14px;
    height: 45px;
    line-height: 43px;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  &:hover &__btn-add {
    display: block;
  }
}
</style>
