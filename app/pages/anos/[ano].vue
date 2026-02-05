<script setup lang="ts">
const route = useRoute()
const ano = route.params.ano as string
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / 
      <NuxtLink to="/anos" class="hover:text-red-600">Anos</NuxtLink> / 
      {{ ano }}
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">Ano: {{ ano }}</h1>
    
    <div class="bg-yellow-400 text-black p-8 magazine-border mb-12 transform rotate-1">
      <h2 class="font-display text-3xl mb-4">DESTAQUES DE {{ ano }}</h2>
      <p class="text-lg font-medium">O que rolava no mundo dos games em {{ ano }}.</p>
      <p class="mt-4 opacity-80 italic text-sm">O acervo está sendo populado com os principais lançamentos deste ano.</p>
    </div>

    <div class="space-y-4">
       <div v-for="i in 3" :key="i" class="p-6 bg-slate-50 border-l-8 border-red-600 font-medium">
          Sugestão de Jogo {{ ano }} #{{ i }}
       </div>
    </div>
  </div>
</template>
