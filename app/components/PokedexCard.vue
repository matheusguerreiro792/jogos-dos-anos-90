<template>
  <div class="pokedex-card w-full max-w-xs mx-auto p-4 flex flex-col gap-3">
    <!-- Header visual -->
    <div class="flex justify-end pr-1">
      <div class="w-8 h-2 bg-red-400 rounded-full border border-black/20"></div>
    </div>

    <!-- Screen area -->
    <div class="bg-gray-800 p-2 rounded border-2 border-slate-600 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>
      
      <!-- Placeholder Image -->
      <div class="relative z-10 w-full h-full bg-slate-700 flex flex-col items-center justify-center text-slate-500 overflow-hidden">
        <div class="w-24 h-24 border-2 border-dashed border-slate-500 rounded-lg flex items-center justify-center mb-2">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
        </div>
        <span class="text-xs font-retro uppercase text-center px-2">Capa do Jogo</span>
      </div>
      
      <!-- Scan line effect -->
      <div class="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
    </div>

    <!-- Info area -->
    <div class="flex flex-col gap-1.5 mt-2 text-sm">
      <div class="bg-green-100 p-1 border border-black/10 rounded flex justify-between items-center mb-1">
        <span class="font-bold text-green-900 text-[10px] tracking-tighter">ESTADO: COMPLETO</span>
        <div class="flex gap-1">
          <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
          <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      <h3 class="text-lg font-display text-slate-900 border-b border-black md:text-xl leading-tight">CHRONO TRIGGER</h3>
      
      <div class="grid grid-cols-2 gap-x-4 gap-y-1 mt-1 text-[11px] leading-tight uppercase font-medium">
        <div class="flex flex-col">
          <span class="text-slate-400 text-[9px]">Plataforma</span>
          <span class="text-slate-800">SNES</span>
        </div>
        <div class="flex flex-col">
          <span class="text-slate-400 text-[9px]">Ano</span>
          <span class="text-slate-800">1995</span>
        </div>
        <div class="flex flex-col">
          <span class="text-slate-400 text-[9px]">Gênero</span>
          <span class="text-slate-800">RPG</span>
        </div>
        <div class="flex flex-col">
          <span class="text-slate-400 text-[9px]">Região</span>
          <span class="text-slate-800">NTSC-U</span>
        </div>
      </div>

      <div class="mt-2 pt-2 border-t border-dashed border-black/20 flex justify-between items-center">
        <span class="text-[9px] bg-red-600 text-white px-1.5 py-0.5 font-bold rounded">ANOS 90 (1990-1999)</span>
        <div class="flex gap-1">
          <div class="w-3 h-3 bg-blue-600 rounded-sm"></div>
          <div class="w-3 h-3 bg-red-600 rounded-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokedex-card {
  box-shadow: 
    6px 6px 0px rgba(0,0,0,0.1),
    12px 12px 0px rgba(0,0,0,0.05);
  transform: rotate(-1deg);
}

.pokedex-card:hover {
  transform: rotate(0deg) scale(1.02);
  transition: all 0.3s ease;
}
</style>
