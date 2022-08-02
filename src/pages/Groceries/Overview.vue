<script setup>
import GroceriesTable from "../../components/GroceriesTable.vue";
import { ref } from "vue";
import { useGroceriesStore } from "../../store/Groceries.js";
</script>
<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>totale</th>
    </tr>
    <GroceriesTable
      v-for="product in this.groceries"
      :name="product.name"
      :price="product.price"
      :amount="product.amount"
    />
    <tr>
      <td colspan="3">grand total</td>
      <td>14</td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapActions, mapStores } from "pinia";
export default {
  components: {},

  computed: {
    ...mapState(useGroceriesStore, { groceries: "groceries" }),
  },
  methods: {},
  mounted() {},
  data() {
    return {};
  },
};
</script>
