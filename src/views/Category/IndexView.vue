<script setup>
import SectionMain from '@/components/SectionMain.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBox from '@/components/CardBox.vue'
import TableCategories from '@/views/Category/components/TableCategories.vue'
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Categorias" main>
        <BaseButton
          to="dawojd"
          label="Nova"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>
      <Cardbox>
        <TableCategories />
      </Cardbox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
