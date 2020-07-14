<template>
  <header class="app-header">
    <NuxtLink to="/" class="app-header__logo-wrapper">
      <AppLogo />
    </NuxtLink>
    <div class="app-header__links-wrapper">
      <NuxtLink to="/shop" class="app-header__link">SHOP</NuxtLink>
      <NuxtLink to="/shop" class="app-header__link">CONTACT</NuxtLink>
    </div>
  </header>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  components: {
    AppLogo,
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
}
</style>
