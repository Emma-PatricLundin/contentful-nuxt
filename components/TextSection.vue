<template>
  <div class="text-center py-8" :class="`${bgColorClass} ${textColorClass}`">
    <p class="text-4xl">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const getBgColorClass = (theme: string) => {
  switch (theme) {
    case 'YellowBlue': {
      return 'bg-yellow-300'
    }
    case 'WhiteBlue': {
      return 'bg-white'
    }
    case 'OrangeBlue': {
      return 'bg-yellow-600'
    }
    default:
      return 'bg-white'
  }
}

const getColorClass = (theme: string) => {
  switch (theme) {
    case 'YellowBlue': {
      return 'text-blue-700'
    }
    case 'WhiteBlue': {
      return 'text-blue-700'
    }
    case 'OrangeBlue': {
      return 'text-blue-700'
    }
    default:
      return 'text-blue-700'
  }
}

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
    const bgColorClass = getBgColorClass(theme)
    const textColorClass = getColorClass(theme)

    return { bgColorClass, textColorClass }
  },
})
</script>

<style></style>
