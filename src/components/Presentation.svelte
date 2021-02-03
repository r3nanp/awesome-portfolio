<script lang="ts">
  const logo = 'images/ui.png';
</script>

<section class="flex h-screen align-center overflow-hidden">
  <article
    class="flex flex-col items-center justify-center text-center p-16 w-full md:justify-start md:items-start md:w-1/2 md:p-20"
  >
    <span class="text-xl tracking-wide">Olá!</span>
    <h2 class="text-4xl tracking-wide">Sou Renan Pereira.</h2>
    <span class="text-xl tracking-wide">Desenvolvedor Full Stack</span>

    <a
      href="https://github.com/r3nanp"
      target="_blank"
      rel="noopener noreferrer"
      class="p-4 text-md font-bold mt-4 w-52 bg-gray-600 transition hover:bg-gray-700 rounded-xl text-white flex items-center justify-center self-center md:self-start"
    >
      <i class="fab fa-github fill-current text-white text-xl" />
      &nbsp;Meu Github
    </a>
  </article>

  <article class="hidden md:block md:relative md:h-screen md:w-1/2">
    <img
      class="w-full absolute top-4 max-w-4xl h-4/5"
      src={logo}
      alt="Codando"
    />
  </article>
</section>
