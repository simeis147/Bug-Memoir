import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HOME",
  description: "BUG 回忆录",
  lastUpdated: true,


  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      { text: '作者博客', link: 'https://simeis147.github.io' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    siteTitle: 'Home',
    logo: '/images/',

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      //{ icon: 'twitter', link: 'https://twitter.com/vuejs' },
    ],

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    lastUpdatedText: 'Updated Date',
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
