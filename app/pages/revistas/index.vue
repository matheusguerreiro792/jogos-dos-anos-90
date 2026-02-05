<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <nav class="mb-8 text-xs font-bold uppercase text-slate-400">
      <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink> / Revistas
    </nav>
    <div class="flex flex-col md:flex-row gap-12 items-start">
      <div class="flex-1">
        <h1 class="text-5xl md:text-8xl font-display mb-8 leading-none">BANNER DE BANCA</h1>
        <p class="text-xl text-slate-600 mb-8 leading-relaxed">
          Tudo o que a gente sabia vinha delas. Ação Games, Super Game Power, Gamers, Videogame... 
          Estamos digitalizando capas e índices para você relembrar as manchetes que faziam a gente correr para a banca.
        </p>
        <div class="p-6 bg-red-600 text-white magazine-border inline-block transform -rotate-1">
           <span class="font-display text-2xl uppercase">Em Breve: Galeria de Capas</span>
        </div>
      </div>
      <div class="w-full md:w-64 aspect-[3/4] bg-slate-200 magazine-border flex items-center justify-center text-slate-400 font-retro text-[8px] text-center p-4">
        ESPAÇO PARA CAPA DA REVISTA (MOCKUP)
      </div>
    </div>
  </div>
</template>
