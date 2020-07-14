<template>
  <NuxtLink :to="linkUrl" class="menu-item" :class="sizeClassName">
    <div class="menu-item__img" :style="imgStyle"></div>
    <div class="menu-item__content">
      <div class="menu-item__title">{{ title }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: () => 'sm',
      validator: (value) => value === 'small' || value === 'large',
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgStyle() {
      return { backgroundImage: `url(${this.imageUrl}) ` }
    },
    sizeClassName() {
      return `menu-item--${this.size}`
    },
  },
}
</script>

<style lang="scss">
.menu-item {
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &--small {
    height: 240px;
  }

  &--large {
    height: 380px;
  }

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &__img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &__content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
  }

  &:hover &__img {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover &__content {
    opacity: 0.9;
  }

  &__title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }

  &__subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
}
</style>
