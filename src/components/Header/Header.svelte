<script lang="ts">
  import MdMenu from 'svelte-icons/md/MdMenu.svelte'

  import Sidebar from './Sidebar.svelte'

  let sidebar_show = false
</script>

<header class="sticky top-0 z-10 bg-white">
  <nav
    class="w-full flex items-center justify-between border-b border-white p-4"
  >
    <h2 class="text-2xl font-bold">Renan Pereira</h2>

    <button
      class="hover:opacity-70 cursor-pointer w-10 h-10 focus:outline-none"
      on:click={() => (sidebar_show = !sidebar_show)}
    >
      <MdMenu />
    </button>

    <Sidebar bind:show={sidebar_show} />
  </nav>
</header>
