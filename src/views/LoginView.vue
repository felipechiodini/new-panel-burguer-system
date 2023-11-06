<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import api from '@/api'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const form = reactive({
  email: 'felipechiodinibona@hotmail.com',
  password: '132567',
  remember: false
})

const router = useRouter()

const loading = ref(false)

const submit = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="E-mail" help="Por favor entre com seu e-mail">
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Senha" help="Por favor entre com sua senha">
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          label="Manter conectado"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton :loading="loading" class="w-full" type="submit" color="info" label="Entrar" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
