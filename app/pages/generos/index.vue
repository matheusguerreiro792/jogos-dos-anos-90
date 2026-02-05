<script setup lang="ts">
const generos = ['RPG', 'Ação', 'Plataforma', 'Luta', 'Corrida', 'Esportes', 'Estratégia', 'Aventura', 'Shoot-em-up']
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / Gêneros
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">Gêneros</h1>
    <p class="text-xl text-slate-600 mb-12 leading-relaxed">
      Ache o seu estilo preferido. Do desafio dos RPGs complexos à adrenalina dos jogos de luta.
    </p>
    
    <div class="flex flex-wrap gap-4">
      <NuxtLink 
        v-for="g in generos" 
        :key="g" 
        :to="`/generos/${g.toLowerCase()}`"
        class="px-8 py-4 bg-white border-4 border-black font-display text-xl hover:bg-black hover:text-white transition-all transform hover:scale-105"
      >
        {{ g }}
      </NuxtLink>
    </div>
  </div>
</template>
