<template>
  <div class="cart">
    <div class="cart__title">Shopping Cart</div>
    <table class="cart__table">
      <thead>
        <tr>
          <th></th>
          <th class="cart__product-heading">Product</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :name="item.name"
          :image-url="item.imageUrl"
          :quantity="item.quantity"
          :unit-price="item.price"
          :total-price="getItemTotalPrice(item.price, item.quantity)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import CartItem from '~/components/CartItem'

export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    },
  },
  methods: {
    getItemTotalPrice(unitPrice, quantity) {
      return unitPrice * quantity
    },
  },
}
</script>

<style lang="scss">
.cart {
  &__title {
    font-size: 28px;
    margin: 50px 25px 25px;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__product-heading {
    padding-left: 1rem;
  }

  thead {
    height: 80px;
  }

  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  th,
  td {
    text-align: left;
    border-top: 1px solid #dedede;
  }
}
</style>
