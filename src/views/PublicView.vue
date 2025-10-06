<template>
  <div class="max-w-6xl mx-auto p-6">
    <header class="text-center mb-6">
      <h1 class="text-4xl header-title">Seja bem vindo. Vamos navegar?</h1>
      <p class="subhead mt-2">Compre aqui a sua passagem:</p>
    </header>

    <!-- Using flex so left and right are side-by-side on md+ and stacked on mobile -->
    <div class="flex flex-col md:flex-collum gap-6 items-start">
      <div class="w-full">
        <SearchSection @submit="onSubmit" />
      </div>
      <div class="w-full">
        <NovidadesSection />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchSection from '../components/SearchSection.vue'
import NovidadesSection from '../components/NovidadesSection.vue'
import { ref } from 'vue'
const last = ref(null)
function onSubmit(payload){
  last.value = payload
  console.log('submitted', payload)
  alert('Formulário enviado — ver console para payload')
}
</script>
