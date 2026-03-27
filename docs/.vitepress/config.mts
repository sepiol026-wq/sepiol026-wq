import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "sepiol026-wq",
  description: "Personal projects, security research, and Telegram automation",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'Portfolio',
          items: [
            { text: 'Overview', link: '/projects/' },
            { text: 'GOYAI', link: '/projects/goyai' },
            { text: 'Heroku', link: '/projects/heroku' },
            { text: 'Security', link: '/projects/security' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/samsepi0l_ovf' },
      { icon: 'github', link: 'https://github.com/sepiol026-wq' }
    ]
  }
})
