<template>
  <div class="p-4">
    <h2 class="news-title">Conheça um pouco das novidades.</h2>
    <div class="grid grid-cols-3 gap-4 mt-6 items-start">
      <div class="col-span-2">
        <div class="banner-large" :style="{'background-image':'url(https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80)'}"></div>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <div class="banner-small relative" :style="{'background-image':'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80)'}">
          <div class="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div class="font-bold text-lg">Notícia</div>
            <div class="text-xs mt-1">Resumo curto</div>
          </div>
        </div>
        <div class="banner-small relative" :style="{'background-image':'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80)'}">
          <div class="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div class="font-bold text-lg">Notícia</div>
            <div class="text-xs mt-1">Resumo curto</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
