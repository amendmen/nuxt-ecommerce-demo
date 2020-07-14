export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      // TODO: move separate pages
      dispatch('shop/GET_SECTIONS'),
      dispatch('shop/GET_COLLECTIONS'),
    ])
  },
}
