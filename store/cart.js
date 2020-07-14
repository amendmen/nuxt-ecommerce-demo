export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM_QTY(state, { id, quantity }) {
    const item = state.items.find((item) => item.id === id)
    item.quantity = quantity
    item.totalPrice = quantity * item.unitPrice
  },
  PUSH_ITEM(state, item) {
    state.items.push(item)
  },
  SPLICE_ITEMS(state, id) {
    const index = state.items.findIndex((item) => item.id === id)
    state.items.splice(index, 1)
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

      commit('SET_ITEM_QTY', { id: itemToAdd.id, quantity: itemToAdd.quantity })
    } else {
      commit('PUSH_ITEM', {
        id: itemToAdd.id,
        name: itemToAdd.name,
        imageUrl: itemToAdd.imageUrl,
        quantity: 1,
        unitPrice: itemToAdd.price,
        totalPrice: itemToAdd.price,
      })
    }
  },
  REMOVE_ITEM({ commit }, id) {
    commit('SPLICE_ITEMS', id)
  },
}

export const getters = {
  itemsCount(state) {
    return state.items.length
  },
  totalPrice(state) {
    return state.items.reduce(
      (totalPrice, item) => totalPrice + item.totalPrice,
      0
    )
  },
}
