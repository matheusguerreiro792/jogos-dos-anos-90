<template>
  <section class="py-12 md:py-20 bg-gradient-to-b from-[#fdfcf8] to-[#f5f5f5] overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-display text-slate-900 leading-[0.9] mb-6">
            Jogos dos <span class="bg-red-600 text-white px-2 inline-block transform skew-x-[-10deg]">Anos 90</span>: 
            <span class="block mt-2">Encontre qualquer clássico em segundos.</span>
          </h1>
          
          <p class="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
            Fichas completas em PT-BR: plataforma, ano, gênero, publisher, região, capas e contexto da época. 
            O seu acervo definitivo da era de ouro.
          </p>

          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <NuxtLink to="/consoles" class="cta-button cta-primary shadow-[4px_4px_0_#000]">
              Explorar por console
            </NuxtLink>
            <NuxtLink to="/anos" class="cta-button cta-secondary shadow-[4px_4px_0_#000]">
              Explorar por ano
            </NuxtLink>
          </div>
        </div>

        <!-- Visual Side -->
        <div class="flex-1 relative w-full flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Background accents -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 -z-10 rounded-full blur-2xl opacity-50"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 -z-10 rounded-full blur-2xl opacity-50"></div>
            
            <!-- The Card -->
            <div class="transform md:scale-110 lg:scale-125 hover:scale-[1.3] transition-transform duration-500">
               <PokedexCard />
            </div>
            
            <div class="mt-8 lg:mt-16 text-center">
              <span class="font-retro text-[10px] text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase">
                Exemplo de Ficha Técnica
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
