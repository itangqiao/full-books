---
---

<script setup>
  import { ref } from 'vue'
  let test = ref(1)
</script>

<button @click="test++"> {{test}}</button>

<style>
</style>
