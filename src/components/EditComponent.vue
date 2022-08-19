<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  price: Number,
  amount: Number,
});
</script>
<template>
  <tr>
    <td><input type="string" v-model="name" /></td>
    <td><input type="string" v-model="price" /></td>
    <td><input type="string" v-model="amount" /></td>
  </tr>
</template>
