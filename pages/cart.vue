<template>
  <div class="cart">
    <div class="cart__wrapper">
      <div class="cart__title">Shopping Cart</div>
      <div class="cart__order">
        <table class="cart__table">
          <thead>
            <tr>
              <th></th>
              <th class="cart__product-heading">Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :item-id="item.id"
              :name="item.name"
              :image-url="item.imageUrl"
              :quantity="item.quantity"
              :unit-price="item.unitPrice"
              :total-price="item.totalPrice"
            />
          </tbody>
        </table>
        <div>
          <div class="cart__total">Total: ${{ totalPrice }}</div>
        </div>
      </div>
      <CheckoutCredentials
        :stripe-price="stripePrice"
        @charge-create="onChargeCreate"
      />
    </div>
  </div>
</template>

<script>
import CartItem from '~/components/CartItem'
import CheckoutCredentials from '~/components/CheckoutCredentials'

export default {
  components: {
    CartItem,
    CheckoutCredentials,
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    },
    totalPrice() {
      return this.$store.getters['cart/totalPrice']
    },
    stripePrice() {
      return this.totalPrice * 100
    },
  },
  methods: {
    onChargeCreate() {
      alert('Your order has been successfully paid')
      this.$store.commit('cart/SET_ITEMS', [])
      this.$router.push('/shop')
    },
  },
}
</script>

<style lang="scss">
.cart {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__order {
    width: 70%;
    padding-right: 30px;
  }

  &__title {
    font-size: 28px;
    margin: 50px 25px 25px;
    width: 100%;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__product-heading {
    padding-left: 1rem;
  }

  &__total {
    text-align: right;
    font-size: 28px;
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
