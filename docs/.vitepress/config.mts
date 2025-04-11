import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fbik",
  description: "Random name generator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      { text: 'Start', link: '/start' },
      {
        text: 'Examples',
        items: [
          { text: 'Examples', link: '/examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FBIKdot/fbik' }
    ]
  }
})
