export default {
  methods: {
    addToCart(item) {
      this.$store.dispatch('cart/ADD_ITEM', item)
    },
  },
}
