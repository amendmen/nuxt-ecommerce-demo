<template>
  <header class="app-header">
    <NuxtLink to="/" class="app-header__logo-wrapper">
      <AppLogo />
    </NuxtLink>
    <div class="app-header__links-wrapper">
      <NuxtLink to="/shop" class="app-header__link">SHOP</NuxtLink>
      <NuxtLink to="/shop" class="app-header__link">CONTACT</NuxtLink>
      <NuxtLink to="/cart" class="app-header__btn-cart">
        <CartIcon />
        <span class="app-header__cart-items-count">{{ cartItemsCount }}</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
import AppLogo from '~/components/AppLogo'
import CartIcon from '~/components/CartIcon'

export default {
  components: {
    AppLogo,
    CartIcon,
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters['cart/itemsCount']
    },
  },
}
</script>

<style lang="scss">
.app-header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  &__logo-wrapper {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  &__links-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__link {
    padding: 10px 15px;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &__btn-cart {
    position: relative;
  }

  &__cart-items-count {
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    font-size: 12px;
  }
}
</style>
