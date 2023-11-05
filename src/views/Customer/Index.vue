<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import BaseButton from '@/components/BaseButton.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import TableCustomers from '@/views/Customer/Components/TableCustomers.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Clientes" main>
        <BaseButton
          label="Novo"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>
      <CardBox class="mb-6" has-table>
        <TableCustomers />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
