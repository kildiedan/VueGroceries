<script setup></script>
<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
    </tr>
    <tr v-for="product in this.groceries">
      <td><input type="string" v-model="product.name" /></td>
      <td><input type="number" v-model="product.price" /></td>
      <td><input type="number" v-model="product.amount" /></td>
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
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
