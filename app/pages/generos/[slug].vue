<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const name = slug.toUpperCase()
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / 
      <NuxtLink to="/generos" class="hover:text-red-600">Gêneros</NuxtLink> / 
      {{ name }}
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">Gênero: {{ name }}</h1>
    
    <div class="bg-slate-900 text-white p-8 magazine-border mb-12">
      <p class="text-xl font-medium">Melhores clássicos de {{ name }} nos anos 90.</p>
      <p class="mt-4 opacity-60 italic text-sm">Este gênero possui centenas de títulos catalogados em nosso sistema.</p>
    </div>

    <div class="grid grid-cols-2 gap-4">
       <div v-for="i in 6" :key="i" class="h-32 bg-slate-100 flex items-center justify-center border-2 border-black/5 rounded">
          <span class="font-bold text-slate-300">JOGO {{ i }}</span>
       </div>
    </div>
  </div>
</template>
