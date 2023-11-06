<script setup>
import BaseButton from '@/components/BaseButton.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import TableCustomers from '@/views/Customer/Components/TableCustomers.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
</script>

<template>
  <SectionMain>
    <SectionTitleLineWithButton title="Clientes" main>
      <BaseButton
        label="Novo"
        rounded-full
        small
      />
    </SectionTitleLineWithButton>
    <CardBox class="mb-6" has-table>
      <TableCustomers checkable />
    </CardBox>
  </SectionMain>
</template>
