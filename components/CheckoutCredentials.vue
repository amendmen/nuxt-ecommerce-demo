<template>
  <div class="checkout-credentials">
    <Card stripe="pk_test_pNU3uz7YZYcXwIJmLNeCNRQt00FmYNXO60" />
    <div v-if="error" class="checkout-credentials__error">{{ error }}</div>
    <button
      class="checkout-credentials__btn"
      :disabled="isLoading"
      @click="makePayment"
    >
      <span v-show="!isLoading">Pay with credit card</span>
      <span v-show="isLoading">Loading...</span>
    </button>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  components: {
    Card,
  },
  props: {
    stripePrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  methods: {
    async makePayment() {
      this.isLoading = true

      const result = await createToken()

      if (result.error) {
        this.error = result.error.message
      } else {
        await this.$axios.$post('/api/payment', {
          token: result.token,
          amount: this.stripePrice,
        })

        this.isLoading = false
        this.$emit('charge-create')
      }
    },
  },
}
</script>

<style lang="scss">
.checkout-credentials {
  width: 30%;
  padding-left: 30px;
  border-left: 1px solid #dedede;

  &__error {
    margin-top: 0.5rem;
    color: rgb(211, 61, 61);
    text-align: center;
  }

  &__btn {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 45px;
    color: #fff;
    background-color: #000;
    border: none;
    box-shadow: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
