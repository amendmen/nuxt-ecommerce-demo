<template>
  <tr class="cart-item">
    <td class="cart-item__img">
      <img :src="imageUrl" :alt="name" class="cart-item__img" />
    </td>
    <td class="cart-item__name">{{ name }}</td>
    <td class="cart-item__qty">{{ quantity }}</td>
    <td class="cart-item__price cart-item__unit-price">${{ unitPrice }}</td>
    <td class="cart-item__price cart-item__total-price">${{ totalPrice }}</td>
  </tr>
</template>

<script>
export default {
  props: {
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

  &__qty,
  &__price {
    width: 100px;
  }
}
</style>
