<script lang="ts">
  import { fly } from 'svelte/transition'
  const avatar_url = 'https://github.com/r3nanp.png'
</script>

<section
  class="flex items-center justify-center md:grid md:grid-cols-2 md:content-center md:gap-20 md:px-10 dark:bg-gray-600"
  in:fly={{ y: -200, duration: 1000 }}
>
  <article class="hidden md:block">
    <img src={avatar_url} alt="Renan" class="rounded-3xl" />
  </article>

  <article class="w-full flex flex-col items-center text-center p-20">
    <h2 class="tracking-wide text-4xl font-bold md:text-center font-sans dark:text-white">Sobre</h2>

    <p class="text-justify tracking-wide py-2 font-mono dark:text-white">
      Me chamo Renan Pereira, tenho 17 anos, sou autodidata, desenvolvedor de
      software e técnico em Redes de Computadores. Apaixonado por tecnologia e
      atualmente estou estagiando na área.
    </p>

    <p class="text-justify tracking-wide py-2 font-mono dark:text-white">
      Desde 2018 venho estudando programação, comecei estudando PHP com HTML,
      CSS e JS, fazendo algumas landing pages usando essas tecnologias. Depois,
      aprendi Python, e atualmente estou usando Javascript e seu ecossistema.
    </p>
  </article>
</section>
