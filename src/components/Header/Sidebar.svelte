<script lang="ts">
  import { fly } from 'svelte/transition'
  import { useClickOutside } from '../../utils/useClickOutside'

  export let show = false
  export let show_sidebar = false

  function handleClickOutside() {
    show_sidebar = false
    alert('Cliquei')
  }
</script>

{#if show}
  <nav
    class="fixed top-0 right-0 h-full py-8 px-4 bg-white overflow-auto w-40 border-l border-gray-400"
    transition:fly={{ x: 250, opacity: 1 }}
  >
    <button
      on:click={() => {
        show_sidebar = true
        show = false
      }}
    />
  </nav>
{/if}
