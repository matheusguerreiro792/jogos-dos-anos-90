<template>
  <section class="py-20 bg-red-600 text-white overflow-hidden relative">
    <!-- Background Texture -->
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <!-- Headline -->
        <div class="flex-1 lg:max-w-xl">
          <span class="text-xs font-retro uppercase bg-white text-red-600 px-2 py-1 mb-4 inline-block">Edição Especial</span>
          <h2 class="text-5xl md:text-8xl font-display leading-[0.8] mb-8 transform -rotate-1">
            UM ACERVO PRA ESSA HISTÓRIA NÃO SE PERDER
          </h2>
          <p class="text-xl font-medium opacity-90 leading-relaxed mb-8">
            Nossa missão é preservar a memória dos pixels que definiram gerações. 
            Fichas técnicas completas com o carinho que só quem viveu a era das locadoras entende.
          </p>
        </div>

        <!-- "Magazine Cover" Calls -->
        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div class="bg-white text-black p-6 magazine-border transform rotate-2 hover:rotate-0 transition-transform">
            <h4 class="font-display text-2xl mb-2 text-red-600">Dicas e Truques</h4>
            <p class="text-xs font-bold leading-tight">O FIM DOS PASSWORD? RELEMBRE O IMPACTO DOS CARTUCHOS COM BATERIA.</p>
          </div>
          
          <div class="bg-yellow-400 text-black p-6 magazine-border transform -rotate-2 hover:rotate-0 transition-transform lg:mt-8">
            <h4 class="font-display text-2xl mb-2">Detonado</h4>
            <p class="text-xs font-bold leading-tight">MORTAL KOMBAT VS STREET FIGHTER: QUAL DEFINIU O FLIPERAMA DOS ANOS 90?</p>
          </div>

          <div class="bg-blue-600 text-white p-6 magazine-border col-span-1 md:col-span-2 transform rotate-1 hover:rotate-0 transition-transform">
             <div class="flex justify-between items-start">
               <div>
                 <h4 class="font-display text-3xl mb-2">REVISTAS CLÁSSICAS</h4>
                 <p class="text-sm font-bold opacity-80 uppercase">Ação Games, Super Game Power e muito mais em breve.</p>
               </div>
               <div class="bg-white text-blue-600 font-retro text-[8px] p-2 rotate-12">TOP 10</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
