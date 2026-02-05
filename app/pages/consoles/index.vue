<script setup lang="ts">
const consoles = ['SNES', 'PlayStation 1', 'Nintendo 64', 'Mega Drive', 'Sega Saturn', 'Game Boy', 'Neo Geo']
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / Consoles
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">Consoles</h1>
    <p class="text-xl text-slate-600 mb-12 leading-relaxed">
      Navegue pelo nosso acervo através das plataformas que definiram a década. 
      De cartuchos clássicos aos primeiros discos, cada console tem sua história aqui.
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <NuxtLink 
        v-for="c in consoles" 
        :key="c" 
        :to="`/consoles/${c.toLowerCase().replace(/ /g, '-')}`"
        class="magazine-border p-6 bg-white hover:bg-yellow-400 transition-colors flex justify-between items-center group"
      >
        <span class="font-display text-2xl uppercase">{{ c }}</span>
        <span class="group-hover:translate-x-2 transition-transform">→</span>
      </NuxtLink>
    </div>
  </div>
</template>
