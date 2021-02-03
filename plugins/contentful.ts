import { Plugin } from '@nuxt/types'
import createContentfulApi from '~/api/contentful'

declare module 'vue/types/vue' {
  // this.$contentfulApi inside Vue components
  interface Vue {
    $contentfulApi: ReturnType<typeof createContentfulApi>
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$contentfulApi inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $contentfulApi: ReturnType<typeof createContentfulApi>
  }
  // nuxtContext.$contentfulApi
  interface Context {
    $contentfulApi: ReturnType<typeof createContentfulApi>
  }
}

declare module 'vuex/types/index' {
  // this.$contentfulApi inside Vuex stores
  interface Store<S> {
    $contentfulApi: ReturnType<typeof createContentfulApi>
  }
}

const contentfulPlugin: Plugin = (ctx, inject) => {
  inject('contentfulApi', createContentfulApi(ctx.env))
}

export default contentfulPlugin
