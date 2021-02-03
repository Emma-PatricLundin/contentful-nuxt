<template>
  <div>
    <h1 class="text-center text-4xl">{{ page.h1Title }}</h1>
    <nuxt-link :to="'/'" class="underline text-blue-600 ml-2"
      >back to startpage</nuxt-link
    >
    <div>
      <Section
        v-for="section in page.sections"
        :key="section.id"
        :section="section"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Section from '~/components/Section.vue'

export default defineComponent({
  name: 'Page',
  components: {
    Section,
  },
  async asyncData({ params, app }) {
    const slug = params.slug
    const page = await app.$contentfulApi.getPageBySlug(slug)
    return { slug, page, pretty: JSON.stringify(page?.sections, undefined, 2) }
  },
})
</script>

<style></style>
