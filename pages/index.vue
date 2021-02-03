<template>
  <div>
    <h1 class="text-center text-4xl">Startpage</h1>
    <ul class="flex justify-center">
      <li
        v-for="page in pages"
        :key="page"
        class="border-solid border rounded-lg bg-gray-100 border-gray-400 py-1 px-2 m-2"
      >
        <nuxt-link :to="page">{{ page }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',
  async asyncData({ app }) {
    const pages = await app.$contentfulApi.generatePageRoutes()
    return { pages }
  },
})
</script>

<style></style>
