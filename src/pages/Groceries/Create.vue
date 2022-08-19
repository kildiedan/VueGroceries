<template>
  <p>name:</p>
  <input type="string" v-model="grocery.name" />
  <p>price:</p>
  <input type="number" v-model="grocery.price" />
  <p>amount:</p>
  <input type="number" v-model="grocery.amount" /><br />
  <button
    @click="
      addGrocery(grocery);
      $router.push('/');
    "
  >
    submit
  </button>
</template>

<script setup>
import { useGroceriesStore } from "../../store/Groceries.js";
import { ref } from "vue";

const store = useGroceriesStore();
const { addGrocery } = store;
const grocery = ref({ name: "", price: 0, amount: 0 });
</script>
