<template>
  <component :is="entryType" v-bind="section.fields" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Entry } from 'contentful'

import TextSection from '~/components/TextSection.vue'

interface Section {
  theme: string
  text: string
}

export default defineComponent({
  name: 'Section',
  components: {
    TextSection,
  },
  props: {
    section: {
      type: Object as PropType<Entry<Section>>,
      default: () => {},
    },
  },
  setup({ section }) {
    const entryType = section?.sys?.contentType?.sys?.id
    return { entryType }
  },
})
</script>

<style></style>
