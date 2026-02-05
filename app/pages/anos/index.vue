<script setup lang="ts">
const anos = Array.from({ length: 10 }, (_, i) => 1990 + i)
const bonus = [1988, 1989, 2000, 2001, 2002]
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / Anos
    </nav>
    <h1 class="text-5xl md:text-7xl font-display mb-8">Cronologia</h1>
    
    <p class="text-xl text-slate-600 mb-12 leading-relaxed">
      A década de 90 foi o ápice da evolução dos jogos. Selecione um ano para ver os lançamentos, as revistas e o contexto da época.
    </p>

    <div class="mb-12">
      <h2 class="font-display text-2xl mb-6 flex items-center gap-2">
        <span class="w-8 h-1 bg-red-600"></span> A Era de Ouro (90s)
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <NuxtLink 
          v-for="ano in anos" 
          :key="ano" 
          :to="`/anos/${ano}`"
          class="magazine-border p-4 bg-white text-center font-display text-2xl hover:bg-red-600 hover:text-white transition-all transform hover:-rotate-1"
        >
          {{ ano }}
        </NuxtLink>
      </div>
    </div>

    <div>
      <h2 class="font-display text-2xl mb-6 flex items-center gap-2 opacity-50">
        <span class="w-8 h-1 bg-slate-400"></span> Bônus e Transição
      </h2>
      <div class="flex flex-wrap gap-3">
        <NuxtLink 
          v-for="ano in bonus" 
          :key="ano" 
          :to="`/anos/${ano}`"
          class="border-2 border-black p-3 bg-slate-100 font-display text-lg hover:bg-slate-900 hover:text-white transition-all"
        >
          {{ ano }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
