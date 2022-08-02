import { defineStore } from 'pinia'

export const useGroceriesStore = defineStore('groceries-store', {
    id: 'groceries',
  state: () => ({
    groceries: [{
        name: "cheesecake",
        price: 4.2,
        amount: 2,
      },
      {
        name: "water",
        price: 0.8,
        amount: 7,
      },],
    nextId: 0,
  }),
  
  getters: {
    products(state) {
      return state.groceries;
    },
},
  actions: {
    addGrocery(payload) {
        // you can directly mutate the state
        this.groceries.push({ name: payload.name, id: this.nextId++, price: payload.price, amount: payload.amount })
      },
  },

})