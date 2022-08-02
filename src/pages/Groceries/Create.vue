<script setup></script>

<template>
  <p>name:</p>
  <input type="string" v-model="name" />
  <p>price:</p>
  <input type="number" v-model="price" />
  <p>amount:</p>
  <input type="number" v-model="amount" />
</template>

<script>
export default {
  components: {},

  computed: {},
  mounted() {},
  data() {
    return { name: "", price: 0, amount: 0 };
  },
  methods: {},
};
</script>
