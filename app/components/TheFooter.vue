<template>
  <footer class="bg-slate-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <span class="text-2xl font-display text-red-500 mb-6 inline-block">Jogos dos Anos 90</span>
          <p class="text-slate-400 text-sm max-w-md leading-relaxed">
            O hub definitivo para quem quer reviver a era de ouro dos videogames. 
            Organização, nostalgia e informação técnica em um só lugar.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-display text-lg mb-6 text-slate-200">Sobre o Acervo</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li><NuxtLink to="/sobre" class="hover:text-red-500 transition-colors">Quem Somos</NuxtLink></li>
            <li><NuxtLink to="/contato" class="hover:text-red-500 transition-colors">Contato / Sugestões</NuxtLink></li>
            <li><NuxtLink to="/revistas" class="hover:text-red-500 transition-colors">Revistas Digitais</NuxtLink></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-display text-lg mb-6 text-slate-200">Legal</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li><NuxtLink to="/politica-de-privacidade" class="hover:text-red-500 transition-colors">Privacidade</NuxtLink></li>
            <li><NuxtLink to="/termos" class="hover:text-red-500 transition-colors">Termos de Uso</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Final CTA & Compliance -->
      <div class="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-slate-500 italic text-center md:text-left max-w-xl">
          Nota editorial: Este site é um acervo independente e não possui afiliação com fabricantes ou editoras. 
          Todas as marcas e imagens mencionadas são propriedade de seus respectivos donos.
        </p>
        
        <div class="flex gap-4">
           <div class="w-10 h-10 border border-slate-700 rounded flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
           </div>
           <div class="w-10 h-10 border border-slate-700 rounded flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
           </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-[10px] text-slate-600 uppercase tracking-widest font-retro">
          © {{ new Date().getFullYear() }} JOGOS DOS ANOS 90. PT-BR.
        </p>
      </div>
    </div>
  </footer>
</template>
