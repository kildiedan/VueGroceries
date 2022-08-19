<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>totale</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
    <tr v-for="(product, index) in groceries" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.amount }}</td>
      <td>{{ Math.round(product.price * product.amount * 100) / 100 }}</td>
      <td>
        <button
          @click="$router.push({ name: 'edit', params: { index: index } })"
        >
          edit
        </button>
      </td>
      <td><button @click="deleteGrocery(index)">delete</button></td>
    </tr>
    <tr>
      <td colspan="3">grand total</td>
      <td>{{ total }} {{ store.grandTotal }}</td>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGroceriesStore } from "../../store/Groceries.js";
import { mapState, mapActions, mapStores } from "pinia";
import { storeToRefs } from "pinia";

const store = useGroceriesStore();
const { groceries, total } = storeToRefs(store);
// const { grandTotal, deleteGrocery } = store;
</script>
