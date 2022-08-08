<script setup></script>
<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>delete</th>
    </tr>
    <tr v-for="(product, index) in this.groceries" :key="product.id">
      <td><input type="string" v-model="product.name" /></td>
      <td><input type="number" v-model="product.price" /></td>
      <td><input type="number" v-model="product.amount" /></td>
      <td><button @click="deleteGrocery(index)">delete</button></td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapActions, mapStores } from "pinia";
import { useGroceriesStore } from "../../store/Groceries.js";
export default {
  components: {},

  computed: {
    ...mapState(useGroceriesStore, { groceries: "groceries" }),
  },
  methods: {
    ...mapActions(useGroceriesStore, ["deleteGrocery"]),
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>
