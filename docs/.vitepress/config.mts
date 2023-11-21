import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HOME",
  description: "BUG 回忆录",
  lastUpdated: true,

 

  themeConfig: {

    algolia: {
      apiKey: "xxx",
      indexName: "xxx",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "xxx"
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
    
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     {
      //       text: 'Section A Title',
      //       items: [
      //         { text: 'Section A Item A', link: '...' },
      //         { text: 'Section B Item B', link: '...' }
      //       ]
      //     }
      //   ]
      // },

      // { text: '作者博客', link: 'https://simeis147.github.io' },
    ],

    sidebar: [  
      {
        text: '快捷指南', link: '/question/README.md'
      },
      {
        text: '2024年',
        collapsed: true,
        items: [
          { text: ' ', link: ' ' }
        ]
      },
      {
        text: '2023年',
        collapsed: true,
        items: [
          { text: 'Runtime API Examples', link: '/year2023/01' }
        ]
      }
    ],

    siteTitle: 'Home',
    // logo: '/images/',

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      //{ icon: 'twitter', link: 'https://twitter.com/vuejs' },
    ],

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    lastUpdatedText: '最后更新时间：',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2023 - present Evan You'
    // }
  }

  
})
