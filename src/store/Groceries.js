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
    total: 0,
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
    // TODO: maak een getter van grandTotal, want er zijn geen async acties nodig en grandtotal leent zich daarom meer voor een getter (je wijzigt geen state)
    grandTotal() {
      // TODO: vervang onderstaande loop voor een array.reduce waarvan je het resultaat direct returned (scheelt weer een paar regels code)
      this.total = 0;
      for (let i = 0; i < this.groceries.length; i++) {
        this.total +=
          Math.round(this.groceries[i].price * this.groceries[i].amount * 100) / 100;
      }
    },
  },

})