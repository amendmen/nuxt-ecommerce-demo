<template>
  <tr class="cart-item">
    <td class="cart-item__img">
      <img :src="imageUrl" :alt="name" class="cart-item__img" />
    </td>
    <td class="cart-item__name">{{ name }}</td>
    <td class="cart-item__qty">
      <ItemCounter :initial-value="quantity" @change="onQtyChange" />
    </td>
    <td class="cart-item__price cart-item__unit-price">${{ unitPrice }}</td>
    <td class="cart-item__price cart-item__total-price">${{ totalPrice }}</td>
    <td class="cart-item__remove">Remove</td>
  </tr>
</template>

<script>
import ItemCounter from '~/components/ItemCounter'

import addToCart from '~/mixins/addToCart'
import removeFromCart from '~/mixins/removeFromCart'

export default {
  components: {
    ItemCounter,
  },
  mixins: [addToCart, removeFromCart],
  props: {
    itemId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onQtyChange(value) {
      this.addToCart({ id: this.itemId, quantity: value })
    },
  },
}
</script>

<style lang="scss">
.cart-item {
  &__img {
    width: 90px;
  }

  &__name {
    padding-left: 1rem;
  }

  &__qty {
    width: 200px;
  }

  &__price {
    width: 100px;
  }

  &__remove {
    text-align: center;
    width: 80px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
