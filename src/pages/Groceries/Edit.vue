<script setup></script>
<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>delete</th>
    </tr>
    <tr v-for="(product, index) in groceries" :key="product.id">
      <td><input type="string" v-model="product.name" /></td>
      <td><input type="number" v-model="product.price" /></td>
      <td><input type="number" v-model="product.amount" /></td>
      <td><button @click="deleteGrocery(index)">delete</button></td>
    </tr>
  </table>
</template>

<script>
import { useGroceriesStore } from "../../store/Groceries.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useGroceriesStore();
    const { groceries } = storeToRefs(store);
    const { deleteGrocery } = store;

    return { groceries, deleteGrocery };
  },
};
</script>
