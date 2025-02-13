import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ACRae - António Carvalho",
  description: "Antonio Carvalho CV",
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpeg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'PostChat', link: '/projects/postchat' },
          { text: 'Tauri Starter', link: '/projects/tauri-starter' },
          { text: 'Genome Assemblers Comparison', link: '/projects/genome-assemblers' },
          { text: 'Mobile-CMUNeXt', link: '/projects/mobile-cmunext'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ACRae' }
    ]
  }
})
