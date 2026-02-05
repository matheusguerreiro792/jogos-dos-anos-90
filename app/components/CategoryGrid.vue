<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center mb-12">
        <h2 class="text-3xl md:text-5xl font-display text-center mb-4">Explore do seu jeito</h2>
        <div class="w-24 h-2 bg-red-600 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Consoles -->
        <div class="magazine-border bg-slate-50 p-6 flex flex-col h-full">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-blue-600 text-white rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path><path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4"></path><path d="M17 2v2"></path><path d="M7 2v2"></path></svg>
            </div>
            <h3 class="text-2xl font-display">Consoles</h3>
          </div>
          <div class="flex flex-wrap gap-2 mb-8">
            <NuxtLink v-for="c in ['SNES', 'PS1', 'N64', 'Mega Drive', 'Saturn']" :key="c" :to="`/consoles/${c.toLowerCase().replace(' ', '-')}`" class="px-3 py-1 bg-white border-2 border-black font-bold text-xs hover:bg-yellow-400 transition-colors">
              {{ c }}
            </NuxtLink>
          </div>
          <NuxtLink to="/consoles" class="mt-auto group font-bold uppercase text-sm flex items-center gap-2 text-blue-600">
            Ver todos <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

        <!-- Gêneros -->
        <div class="magazine-border bg-slate-50 p-6 flex flex-col h-full">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-red-600 text-white rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
            </div>
            <h3 class="text-2xl font-display">Gêneros</h3>
          </div>
          <div class="flex flex-wrap gap-2 mb-8">
            <NuxtLink v-for="g in ['RPG', 'Ação', 'Plataforma', 'Luta', 'Corrida']" :key="g" :to="`/generos/${g.toLowerCase()}`" class="px-3 py-1 bg-white border-2 border-black font-bold text-xs hover:bg-red-500 hover:text-white transition-colors">
              {{ g }}
            </NuxtLink>
          </div>
          <NuxtLink to="/generos" class="mt-auto group font-bold uppercase text-sm flex items-center gap-2 text-red-600">
            Ver todos <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

        <!-- Anos -->
        <div class="magazine-border bg-yellow-100 p-6 flex flex-col h-full">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-black text-white rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h3 class="text-2xl font-display">Anos</h3>
          </div>
          <p class="text-xs font-bold uppercase mb-4 text-slate-500">A era principal:</p>
          <div class="flex flex-wrap gap-2 mb-6">
             <NuxtLink v-for="y in [1990, 1995, 1999]" :key="y" :to="`/anos/${y}`" class="px-3 py-1 bg-white border-2 border-black font-bold text-xs hover:bg-black hover:text-white transition-colors">
              {{ y }}
            </NuxtLink>
          </div>
          <div class="mt-auto pt-4 border-t-2 border-black/10">
            <span class="text-[10px] font-retro uppercase text-slate-600 block mb-2">Bônus: 1988–1989 e 2000–2002</span>
            <NuxtLink to="/anos" class="group font-bold uppercase text-sm flex items-center gap-2 text-slate-900">
              Ver linha do tempo <span class="group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
