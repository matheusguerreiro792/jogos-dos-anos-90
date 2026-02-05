<template>
  <section class="py-16 bg-[#f5f5f5]">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Benefit 1 -->
        <div class="flex flex-col items-center text-center p-6 grayscale hover:grayscale-0 transition-all">
          <div class="w-20 h-20 bg-white magazine-border rounded-full flex items-center justify-center mb-6 overflow-hidden">
             <div class="w-12 h-12 bg-red-600 mask-cartridge">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-red-600"><path d="M20 7V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2M4 7v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7M4 7h16" /></svg>
             </div>
          </div>
          <h3 class="text-xl font-display mb-3">Fichas Padronizadas</h3>
          <p class="text-slate-600 text-sm font-medium">Dados técnicos precisos com padrão de enciclopédia para cada título.</p>
        </div>

        <!-- Benefit 2 -->
        <div class="flex flex-col items-center text-center p-6 grayscale hover:grayscale-0 transition-all border-y md:border-y-0 md:border-x border-black/10">
          <div class="w-20 h-20 bg-white magazine-border rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
          </div>
          <h3 class="text-xl font-display mb-3">Listas Organizadas</h3>
          <p class="text-slate-600 text-sm font-medium">Navegue por console, ano ou gênero com filtros simplificados e diretos.</p>
        </div>

        <!-- Benefit 3 -->
        <div class="flex flex-col items-center text-center p-6 grayscale hover:grayscale-0 transition-all">
          <div class="w-20 h-20 bg-white magazine-border rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M8 7h6"></path><path d="M8 11h8"></path><path d="M8 15h6"></path></svg>
          </div>
          <h3 class="text-xl font-display mb-3">Contexto da Época</h3>
          <p class="text-slate-600 text-sm font-medium">Trivia, curiosidades de revistas clássicas e o impacto de cada lançamento.</p>
        </div>
      </div>
    </div>
  </section>
</template>
