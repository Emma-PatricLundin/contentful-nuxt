<template>
  <div>
    <h1 class="text-center text-4xl">{{ page.h1Title }}</h1>
    <nuxt-link :to="'/'" class="underline text-blue-600 ml-2"
      >back to startpage</nuxt-link
    >
    <div>
      <TextSection
        v-for="section in page.sections"
        :key="section.id"
        v-bind="section.fields"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TextSection from '~/components/TextSection.vue'

export default defineComponent({
  name: 'Page',
  components: {
    TextSection,
  },
  async asyncData({ params, app }) {
    const slug = params.slug
    const page = await app.$contentfulApi.getPageBySlug(slug)
    return { slug, page }
  },
})
</script>

<style></style>
