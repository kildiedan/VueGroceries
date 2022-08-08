<script setup></script>
<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>totale</th>
    </tr>
    <tr v-for="(product, index) in groceries" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.amount }}</td>
      <td>{{ Math.round(product.price * product.amount * 100) / 100 }}</td>
    </tr>
    <tr>
      <td colspan="3">grand total</td>
      <td>{{ total }}</td>
    </tr>
  </table>
</template>

<script>
import { ref, onMounted } from "vue";
import { useGroceriesStore } from "../../store/Groceries.js";
import { mapState, mapActions, mapStores } from "pinia";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useGroceriesStore();
    const { groceries, total } = storeToRefs(store);
    const { grandTotal } = store;
    onMounted(() => {
      grandTotal();
    });

    return { groceries, total, grandTotal };
  },
};
</script>
