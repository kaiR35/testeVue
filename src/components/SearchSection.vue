<template>
  <div class="form-border">
    <!-- row 1: Trecho / Origem / Destino -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">TRECHO</span>
          <Dropdown v-model="local.trecho" :options="trechoOptions" optionLabel="label"  class="ml-4 w-44"/>
        </div>
      </div>

      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">ORIGEM</span>
          <Dropdown v-model="local.origem" :options="cityOptions" optionLabel="label"  class="ml-4 w-44"/>
        </div>
      </div>

      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">DESTINO</span>
          <Dropdown v-model="local.destino" :options="cityOptions" optionLabel="label"  class="ml-4 w-44"/>
        </div>
      </div>
    </div>

    <!-- row 2: navegantes / veiculo / data ida / data volta -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2">
      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">NAVEGANTES</span>
          <Dropdown v-model="local.navegantes" :options="navOptions" optionLabel="label" placeholder="1" class="ml-4 w-20"/>
        </div>
      </div>

      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">VEÍCULO</span>
          <Dropdown v-model="local.veiculo" :options="vehicleOptions" optionLabel="label" class="ml-4 w-44"/>
        </div>
      </div>

      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">DATA DE IDA</span>
        </div>
        <Calendar v-model="local.dataIda" dateFormat="dd/mm/yy" showIcon class="w-40"/>
      </div>

      <div class="p-3 form-border flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="badge">DATA DE VOLTA</span>
        </div>
        <Calendar v-model="local.dataVolta" dateFormat="dd/mm/yy" showIcon class="w-40"/>
      </div>
    </div>
  </div>
      <div class="mt-4">
      <button :class="['w-full big-advance', canProceed ? 'opacity-100' : 'opacity-60']" :disabled="!canProceed" @click="submit">AVANÇAR</button>
      <p class="text-center text-gray-400 mt-3">Preencha os campos para prosseguir</p>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'

const local = reactive({
  trecho: null,
  origem: null,
  destino: null,
  navegantes: null,
  veiculo: null,
  dataIda: null,
  dataVolta: null
})

const trechoOptions = [
  { label:'Ida', value:'ida' },
  { label:'Volta', value:'volta' },
  { label:'Ida e Volta', value:'ida_volta' }
]
const cityOptions = [
  { label:'Navegantes', value:'navegantes' },
  { label:'Curitiba', value:'curitiba' },
  { label:'Florianópolis', value:'florianopolis' }
]
const navOptions = [{label:'1',value:1},{label:'2',value:2},{label:'3',value:3}]
const vehicleOptions = [{label:'Carro',value:'carro'},{label:'Moto',value:'moto'}]

const canProceed = computed(() => {
  if (!local.trecho || !local.origem || !local.destino || !local.navegantes || !local.veiculo) return false
  if (!local.dataIda) return false
  if (local.trecho === 'ida') return true
  if (!local.dataVolta) return false
  try {
    const d1 = new Date(local.dataIda)
    const d2 = new Date(local.dataVolta)
    return d2 >= d1
  } catch (e) {
    return false
  }
})

const emit = defineEmits(['submit'])
function submit(){
  emit('submit', { ...local })
}
</script>
