import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import { themeConfig } from '../../config'

const collectionEntries = await getCollection('posts')

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', pubDate: Date } }]
// to { 'post.md': { title: 'Example', pubDate: Date } }
const pages = Object.fromEntries(
  collectionEntries.map(({ id, data }) => [id.replace(/\.(md|mdx)$/, ''), data])
)

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: themeConfig.site.title,
    logo: {
      path: 'public/og/og-logo.png',
      size: [140, 140]
    },
    bgGradient: [
      [255, 94, 195],
      [160, 107, 255],
      [82, 255, 229]
    ],
    bgImage: {
      path: 'public/og/og-bg.png',
      fit: 'cover'
    },
    padding: 72,
    font: {
      title: {
        color: [245, 245, 245],
        size: 72,
        weight: 'Bold',
        families: ['PingFang SC']
      },
      description: {
        color: [220, 220, 220],
        size: 36,
        weight: 'Medium',
        families: ['PingFang SC']
      }
    },
    fonts: [
      'https://cdn.jsdelivr.net/npm/font-pingfang-sc-font-weight-improved@latest/PingFangSC-Medium.woff2',
      'https://cdn.jsdelivr.net/npm/font-pingfang-sc-font-weight-improved@latest/PingFangSC-Semibold.woff2'
    ]
  })
})
