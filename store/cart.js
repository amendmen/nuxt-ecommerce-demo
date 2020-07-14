export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  INCREMENT_ITEM_QTY(state, itemId) {
    const item = state.items.find((item) => item.id === itemId)
    item.quantity++
  },
  PUSH_ITEM(state, item) {
    state.items.push(item)
  },
}

export const actions = {
  ADD_ITEM({ commit, state }, itemToAdd) {
    const existedItem = state.items.find((item) => item.id === itemToAdd.id)

    if (existedItem) {
      // NOTE: will couse an error
      // existedItem.quantity += 1

      // NOTE: will not work
      // commit('INCREMENT_ITEM_QTY', existedItem)

      commit('INCREMENT_ITEM_QTY', itemToAdd.id)
    } else {
      commit('PUSH_ITEM', { ...itemToAdd, quantity: 1 })
    }
  },
}

export const getters = {
  itemsCount(state) {
    return state.items.length
  },
}
