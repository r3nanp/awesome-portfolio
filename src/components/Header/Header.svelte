<script context="module" lang="ts">
  import Toggle from './Toggle.svelte'

  let toggle: boolean
</script>

<header class="sticky top-0 z-10 bg-white">
  <nav class="w-full flex items-center justify-between border-b border-white p-4">
    <h2 class="text-2xl font-bold">Renan Pereira</h2>

    <Toggle bind:toggle={toggle}  />
  </nav>
</header>
