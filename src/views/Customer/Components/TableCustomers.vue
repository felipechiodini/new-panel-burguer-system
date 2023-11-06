<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/CardBoxModal.vue'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import api from "@/api"

defineProps({
  checkable: Boolean
})

const mainStore = useMainStore()

const items = computed(() => mainStore.clients)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(5)

const currentPage = ref(1)

const checkedRows = ref([])

const pageData = ref(null)

const loading = ref(true)

const filters = ref({})

onMounted(() => {
  fetchCustomersPage()
  watch(currentPage, () => fetchCustomersPage())
})

const fetchCustomersPage = async () => {
  loading.value = true
  const { data } = await api.get('plankton/customer', {
    params: {
      page: currentPage.value ?? 1,
      filters: filters.value
    }
  })

  pageData.value = data.page
  currentPage.value = data.page.current_page
  loading.value = false
}

const itemsPaginated = computed(() => pageData.value.data)

const numPages = computed(() => pageData.value.last_page)

const pagesList = computed(() => {
  const pagesList = []

  const start = currentPage.value - 5
  const end = currentPage.value + 5

  for (let i = start; i >= start && i <= end; i++) {
    if (i > 0 && i <= numPages.value) {
      pagesList.push(i)
    }
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id)
  }
}
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Nome</th>
        <th>Telefone</th>
        <th />
      </tr>
    </thead>
    <tbody v-if="loading === false">
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, client)" />
        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Telefone">
          {{ client.cellphone }}
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel v-if="loading === false">
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Página {{ currentPage }} de {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
