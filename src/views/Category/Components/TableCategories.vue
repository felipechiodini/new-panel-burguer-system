<script setup>
import { computed } from 'vue'
// import { index } from '@/views/Category/js/Service.js'

const page = null

const pageItems = computed(() => {
  return page?.data?.data || [
    { id:1, name: 'dwas' }
  ]
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in pageItems" :key="category.id">
        <td data-label="Nome">
          {{ category.name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
