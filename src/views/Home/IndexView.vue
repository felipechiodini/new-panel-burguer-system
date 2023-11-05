<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import { ref } from "vue";

const loading = ref(false)

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <div class="container py-3">
        <div v-if="loading === false">
          <!-- <store-status @update="load()" class="mb-4" :status="home.store_status" /> -->

          <div class="dwaoifjwaoifwa">
            <div class="fpoawkopfawj link">
              <a target="_blanck" :href="`https://teste.burguersystem.online`">
                <span>Link Cardápio</span>
                <h5><i class="fas fa-link"></i></h5>
              </a>
            </div>

            <div class="fpoawkopfawj">
              <span>Pedidos Em aberto</span>
              <h5>5</h5>
            </div>

            <div class="fpoawkopfawj">
              <span>Pedidos Finalizados</span>
              <h5>2</h5>
            </div>

            <div class="fpoawkopfawj">
              <span>Faturado</span>
              <h5>{{ (589) }}</h5>
            </div>

            <div class="fpoawkopfawj">
              <span>Ticket Médio</span>
              <h5>{{ (45) }}</h5>
            </div>

            <div class="fpoawkopfawj">
              <span>Mais Vendido</span>
              <h5>Plankton</h5>
            </div>

            <div class="fpoawkopfawj">
              <span>Novos Clientes</span>
              <h5>5</h5>
            </div>

          </div>


        </div>
        <div v-else>
          <!-- <b-spinner></b-spinner> -->
        </div>
      </div>
    </SectionMain>
  </LayoutAuthenticated>

</template>

<style scoped>

.dwaoifjwaoifwa {
  display: flex;
}

</style>
