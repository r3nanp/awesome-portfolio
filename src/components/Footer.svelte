<script lang="ts">
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
</script>

<footer class="flex items-center justify-center flex-col bg-gray-700 px-2 py-6">
  <p class="text-md text-white">Este website foi feito com Svelte e 💖</p>

  <div class="flex align-center justify-center py-2">
    <a
      href="https://github.com/r3nanp/awesome-portfolio"
      rel="noopener noreferrer"
      target="_blank"
      class="transition hover:opacity-70 pr-2 transform hover:scale-110"
    >
      <div class="w-11 h-11 fill-current text-white">
        <FaGithub />
      </div>
    </a>
    <a
      href="https://linkedin.com/in/r3nanp"
      rel="noopener noreferrer"
      target="_blank"
      class="transition hover:opacity-70 transform hover:scale-110"
    >
      <div class="w-11 h-11 fill-current text-white">
        <FaLinkedin />
      </div>
    </a>
  </div>
</footer>
