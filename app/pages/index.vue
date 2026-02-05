<script setup lang="ts">
useHead({
  title: 'Jogos dos Anos 90 | O Acervo Definitivo de Clássicos',
  meta: [
    { name: 'description', content: 'Encontre fichas técnicas completas de qualquer jogo dos anos 90 em segundos. SNES, Playstation, N64 e muito mais. O acervo em PT-BR que preserva a história.' },
    { property: 'og:title', content: 'Jogos dos Anos 90 | O Acervo Definitivo' },
    { property: 'og:description', content: 'Reviva a era de ouro com fichas detalhadas, consoles e revistas clássicas.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    
    <CategoryGrid />
    
    <Benefits />
    
    <MagazineSection />
    
    <!-- Final CTA Section -->
    <section class="py-20 bg-white border-y-4 border-black text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl md:text-6xl font-display mb-8">PRONTO PARA RECOMEÇAR?</h2>
        <div class="flex flex-wrap gap-6 justify-center">
            <NuxtLink to="/consoles" class="cta-button cta-primary text-xl px-10">
              Explorar por console
            </NuxtLink>
            <NuxtLink to="/anos" class="cta-button cta-secondary text-xl px-10">
              Explorar por ano
            </NuxtLink>
        </div>
        <p class="mt-12 font-retro text-[10px] text-slate-400 animate-pulse">PRESS START TO BEGIN YOUR JOURNEY</p>
      </div>
    </section>
  </div>
</template>
