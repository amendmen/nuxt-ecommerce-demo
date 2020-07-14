<template>
  <div class="item-counter">
    <button
      class="item-counter__btn item-counter__sub"
      @click="changeValue('sub')"
    >
      -
    </button>
    <input v-model.number="value" type="text" class="item-counter__input" />
    <button
      class="item-counter__btn item-counter__add"
      @click="changeValue('add')"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: 0,
    }
  },
  created() {
    this.value = this.initialValue
  },
  methods: {
    changeValue(action) {
      if (action === 'sub' && this.value > 1) {
        this.value -= 1
      } else if (action === 'add') {
        this.value += 1
      }

      this.$emit('change', this.value)
    },
  },
}
</script>

<style lang="scss">
.item-counter {
  display: flex;

  &__input {
    width: 50px;
    text-align: center;
    cursor: default;
  }

  &__btn {
    cursor: pointer;
  }
}
</style>
