<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const name = slug.replace(/-/g, ' ').toUpperCase()
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / 
      <NuxtLink to="/consoles" class="hover:text-red-600">Consoles</NuxtLink> / 
      {{ name }}
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">{{ name }}</h1>
    <div class="bg-blue-600 text-white p-8 magazine-border mb-12">
      <p class="text-xl font-medium">Você está explorando o acervo de {{ name }}.</p>
      <p class="mt-4 opacity-80 italic text-sm">Em breve: Listagem detalhada de todos os jogos com fichas técnicas PT-BR.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div v-for="i in 4" :key="i" class="border-2 border-dashed border-slate-300 p-8 flex items-center justify-center text-slate-400 font-retro text-[10px] uppercase">
          Jogo Placeholder #{{ i }}
       </div>
    </div>
  </div>
</template>
