<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import GroceriesTable from "./components/GroceriesTable.vue";
import { ref } from "vue";
</script>

<template>
  <div id="app">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>amount</th>
      <th>totale</th>
    </tr>
    <GroceriesTable
      v-for="product in products"
      :name="product.name"
      :price="product.price"
      :amount="product.amount"
    />
    <tr>
      <td colspan="3">grand total</td>
      <td>8</td>
    </tr>
  </table>
</template>

<script>
export default {
  components: {
    HelloWorld,
  },

  computed: {},
  mounted() {},
  data() {
    return {
      products: [
        {
          name: "cheesecake",
          price: 4.2,
          amount: 2,
          total: 4,
        },
        {
          name: "water",
          price: 0.8,
          amount: 7,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
