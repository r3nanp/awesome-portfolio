<script lang="ts">
  import { onMount } from 'svelte'
  import { typewriter } from '../typewriter'

  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'

  let visible = false
  const logo = 'images/ui.png'

  onMount(() => {
    visible = true
  })
</script>

<section class="flex h-screen align-center overflow-hidden bg-gradient-to-r from-accents-0 via-gray-50 to-accents-1 dark:bg-gray-800">
  <article
    class="flex flex-col items-center justify-center text-center p-16 w-full md:justify-start md:items-start md:w-1/2 md:p-20"
  >
    <p class="text-xl tracking-wide font-mono dark:text-white">Olá!</p>
    {#if visible}
      <h2
        id="typewriter"
        in:typewriter={{ speed: 100 }}
        class="text-4xl tracking-wide overflow-hidden font-mono dark:text-white"
      >
        Sou Renan Pereira.
      </h2>
    {/if}
    <span class="text-xl tracking-wide font-mono dark:text-white">Desenvolvedor Full Stack</span>
    <a
      href="https://github.com/r3nanp"
      target="_blank"
      rel="noopener noreferrer"
      class="p-4 text-md font-bold mt-4 w-52 bg-gray-600 transition hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 rounded-xl text-white flex items-center justify-center self-center md:self-start"
    >
      <div class="w-11 h-6 fill-current text-white">
        <FaGithub />
      </div>
      <span class="text-white font-bold text-xl font-sans">Meu Github</span>
    </a>
  </article>

  <article class="hidden md:block md:relative md:h-screen md:w-1/2">
    <img
      class="w-full absolute top-4 max-w-4xl"
      width={500}
      height={500}
      src={logo}
      alt="Codando"
    />
  </article>
</section>

<style>
  #typewriter {
    border-right: 0.15em solid black;
    white-space: nowrap;
    animation: blink-caret 0.75s step-end infinite;
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
</style>
