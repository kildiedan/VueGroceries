import { defineStore } from 'pinia'

export const useGroceriesStore = defineStore('groceries-store', {
    id: 'groceries',
  state: () => ({
    groceries: [{
        id: 1,
        name: "cheesecake",
        price: 4.2,
        amount: 2,
      },
      {
        id: 2,
        name: "water",
        price: 0.8,
        amount: 7,
      },],
    nextId: 3,
  }),
  
  getters: {
    products(state) {
      return state.groceries;
    },
},
  actions: {
    addGrocery(payload) {
      this.groceries.push({ name: payload.name, id: this.nextId++, price: payload.price, amount: payload.amount })
    },
    deleteGrocery(index){
      this.groceries.splice(index, 1)
    },
  },

})