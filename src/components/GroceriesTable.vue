<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  price: Number,
  amount: Number,
  total: Number,
});
</script>
<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ price }}</td>
    <td><input type="number" v-model="amount" /></td>
    <td>{{ Math.round(price * amount * 100) / 100 }}</td>
  </tr>
</template>
