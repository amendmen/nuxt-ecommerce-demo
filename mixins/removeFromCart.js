export default {
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('cart/REMOVE_ITEM', itemId)
    },
  },
}
