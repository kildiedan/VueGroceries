<script setup></script>

<template>
  <p>name:</p>
  <input type="string" v-model="grocery.name" />
  <p>price:</p>
  <input type="number" v-model="grocery.price" />
  <p>amount:</p>
  <input type="number" v-model="grocery.amount" /><br />
  <button @click="addGrocery(grocery)">submit</button>
</template>

<script>
import { useGroceriesStore } from "../../store/Groceries.js";
import { mapState, mapActions, mapStores } from "pinia";
export default {
  components: {},

  computed: {},
  mounted() {},
  data() {
    return {
      grocery: {
        name: "",
        price: 0,
        amount: 0,
      },
    };
  },
  methods: {
    ...mapActions(useGroceriesStore, ["addGrocery"]),
  },
};
</script>
