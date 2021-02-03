<template>
  <div class="text-center py-8" :class="`${bgColorClass} ${textColorClass}`">
    <p class="text-xl">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'TextSection',
  props: {
    theme: {
      type: String,
      default: 'YellowBlue',
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup({ theme }) {
    const bgColorClass = theme === 'YellowBlue' ? 'bg-blue-700' : 'bg-white'
    const textColorClass =
      theme === 'YellowBlue' ? 'text-yellow-300' : 'text-blue-700'

    return { bgColorClass, textColorClass }
  },
  methods: {
    getBgColor(theme: 'WhiteBlue' | 'YellowBlue'): string {
      if (theme === 'WhiteBlue') return 'blue'
      else return 'blue'
    },
    getColor(theme: 'WhiteBlue' | 'YellowBlue'): string {
      if (theme === 'WhiteBlue') return 'white'
      else return 'yellow'
    },
  },
})
</script>

<style></style>
