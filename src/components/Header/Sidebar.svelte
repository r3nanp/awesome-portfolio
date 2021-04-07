<script lang="ts">
  import { fly } from 'svelte/transition'

  export let show = false
  export let show_sidebar = false

  const close_icon = 'images/close.svg'

  function searchByTopic(event: Event) {
    event.preventDefault()

    const linkElement = document.querySelector('nav a [href^="#"')

    linkElement.addEventListener('click', () => {
      let id = linkElement.getAttribute('href')

      // let targetOffset = id.
    })
  }
</script>

{#if show}
  <nav
    class="fixed top-0 right-0 h-full py-8 px-4 bg-white overflow-auto w-40 border-l border-gray-400"
    in:fly={{ x: 150, opacity: 0.7 }}
  >
    <button
      class="absolute bg-transparent border-0 right-2 top-0"
      on:click={() => {
        show_sidebar = true
        show = false
      }}
    >
      <img src={close_icon} alt="Close icon" class="h-12 w-12" /></button
    >

    <div class="flex flex-col justify-center items-center">
      <a href="#about" class="py-2 hover:underline font-xl">Sobre</a>
      <a href="#skills" class="py-2 hover:underline font-xl">Habilidades</a>
    </div>
  </nav>
{/if}
