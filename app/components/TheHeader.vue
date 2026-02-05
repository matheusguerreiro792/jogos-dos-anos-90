<script setup lang="ts">
const isOpen = ref(false)

const navLinks = [
  { name: 'Jogos', href: '/consoles' },
  { name: 'Consoles', href: '/consoles' },
  { name: 'Anos', href: '/anos' },
  { name: 'Gêneros', href: '/generos' },
  { name: 'Revistas', href: '/revistas' },
  { name: 'Sobre', href: '/sobre' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-[#fdfcf8] border-b-4 border-black">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="text-xl md:text-2xl font-display text-red-600 bg-white border-2 border-black px-2 transform -rotate-2">
          Jogos dos Anos 90
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-6">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href"
          class="font-display text-sm hover:text-red-600 transition-colors uppercase"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen"
        class="lg:hidden p-2 border-2 border-black bg-yellow-400 active:translate-y-0.5"
      >
        <div v-if="!isOpen" class="space-y-1 w-6">
          <div class="h-1 bg-black w-full"></div>
          <div class="h-1 bg-black w-full"></div>
          <div class="h-1 bg-black w-full"></div>
        </div>
        <span v-else class="font-bold text-xl leading-none">X</span>
      </button>
    </nav>

    <!-- Mobile Nav Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-full"
      enter-to-class="transform translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0"
      leave-to-class="transform -translate-y-full"
    >
      <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-yellow-400 border-b-4 border-black shadow-xl lg:hidden">
        <div class="flex flex-col p-6 gap-4">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.href"
            class="font-display text-xl border-b-2 border-black pb-2 hover:pl-2 transition-all"
            @click="isOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
