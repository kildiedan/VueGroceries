<!-- TODO: na het toevoegen van een nieuw product moet er een router redirect naar de boodschappen overzichtspagina plaatsvinden -->
<script setup></script>

<template>
  <p>name:</p>
  <input type="string" v-model="grocery.name" />
  <p>price:</p>
  <input type="number" v-model="grocery.price" />
  <p>amount:</p>
  <input type="number" v-model="grocery.amount" /><br />
  <button @click="addGrocery(grocery)">submit</button>
</template>

<script>
import { useGroceriesStore } from "../../store/Groceries.js";
import { ref } from "vue";
export default {
  setup() {
    const store = useGroceriesStore();
    const { addGrocery } = store;
    const grocery = ref({ name: "", price: 0, amount: 0 });

    return { grocery, addGrocery };
  },
};
</script>
