<template>
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
    </tr>
    <edit-component
      :key="groceries[$route.params.index].id"
      :name="groceries[$route.params.index].name"
      :price="groceries[$route.params.index].price"
      :amount="groceries[$route.params.index].amount"
    />
  </table>
</template>

<script setup>
import { useGroceriesStore } from "../../store/Groceries.js";
import { storeToRefs } from "pinia";
import EditComponent from "../../components/EditComponent.vue";

const store = useGroceriesStore();
const { groceries } = storeToRefs(store);
</script>
