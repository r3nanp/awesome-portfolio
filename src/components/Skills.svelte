<script lang="ts">
  import IconWrapper from './IconWrapper.svelte'
  import Box from './Box.svelte'

  import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte'
  import DiJsBadge from 'svelte-icons/di/DiJsBadge.svelte'
  import DiCss3 from 'svelte-icons/di/DiCss3.svelte'
  import DiReact from 'svelte-icons/di/DiReact.svelte'
  import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
  import DiDatabase from 'svelte-icons/di/DiDatabase.svelte'
  import DiMongodb from 'svelte-icons/di/DiMongodb.svelte'
</script>

<section class="text-center p-10 overflow-hidden w-full dark:bg-gray-700">
  <h2 class="font-bold text-4xl text-black dark:text-white">Habilidades</h2>

  <div class="flex h-auto flex-wrap mt-4">
    <Box>
      <IconWrapper color="text-red-600">
        <DiHtml5 />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">HTML</h2>
    </Box>

    <Box>
      <IconWrapper color="text-blue-500">
        <DiCss3 />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">CSS</h2>
    </Box>

    <Box>
      <IconWrapper color="text-yellow-400">
        <DiJsBadge />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">Javascript</h2>
    </Box>

    <Box>
      <IconWrapper color="text-yellow-200">
        <DiDatabase />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">SQL</h2>
    </Box>

    <Box>
      <IconWrapper color="text-blue-500">
        <DiReact />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">React</h2>
    </Box>

    <Box>
      <IconWrapper color="text-green-500">
        <DiNodejsSmall />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">Node.js</h2>
    </Box>

    <Box>
      <IconWrapper color="text-green-500">
        <DiMongodb />
      </IconWrapper>

      <h2 class="mt-4 text-2xl font-bold dark:text-white">MongoDB</h2>
    </Box>
  </div>
</section>
