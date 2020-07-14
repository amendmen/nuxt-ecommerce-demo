export const state = () => ({
  sections: [],
  collections: [],
})

export const mutations = {
  SET_SECTIONS(state, sections) {
    state.sections = sections
  },
  SET_COLLECTIONS(state, collections) {
    state.collections = collections
  },
}

export const actions = {
  async GET_SECTIONS({ commit }) {
    const sections = await this.$axios.$get('/api/sections')
    commit('SET_SECTIONS', sections)
  },
  async GET_COLLECTIONS({ commit }) {
    const collections = await this.$axios.$get('/api/collections')
    commit('SET_COLLECTIONS', collections)
  },
}

export const getters = {
  currentCollection(state) {
    return (slug) => {
      const collection = state.collections.find(
        (collection) => collection.slug === slug
      )
      return collection
    }
  },
}
