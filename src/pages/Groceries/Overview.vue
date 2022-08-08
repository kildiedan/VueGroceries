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
      <td>{{ total }}</td>
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
  data() {
    return { total: 0 };
  },
  methods: {
    grandTotal() {
      this.total = 0;
      for (let i = 0; i < this.groceries.length; i++) {
        this.total +=
          Math.round(this.groceries[i].price * this.groceries[i].amount * 100) /
          100;
      }
    },
  },
  mounted() {
    this.grandTotal();
  },
};
</script>
