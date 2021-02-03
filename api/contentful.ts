import { Context } from '@nuxt/types'
import * as contentful from 'contentful'
type env = Context['env']

interface PageType {
  tabTitle: string
  h1Title: string
  slug: string
}

export default ($env: env) => {
  const config = {
    space: $env.CTF_SPACE_ID,
    accessToken: $env.CTF_CDA_ACCESS_TOKEN,
  }

  const client = contentful.createClient(config)

  const getPageBySlug = async (slug: string) => {
    const pages = await client
      .getEntries<PageType>({
        content_type: process.env.CTF_PAGE_TYPE_ID,
      })
      .then((res) => res.items.filter((item) => item.fields.slug === slug))
    return pages.length >= 1 ? pages[0].fields : null
  }

  const generatePageRoutes = () => {
    return client
      .getEntries<PageType>({
        content_type: $env.CTF_PAGE_TYPE_ID,
      })
      .then((res) => res.items.map((item) => item.fields.slug))
  }

  return {
    getPageBySlug,
    generatePageRoutes,
  }
}
