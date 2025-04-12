import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: "Tony ⁺ 成长全书",
  description: "Tony ⁺ 成长全书",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    editLink: {
      pattern:
        'https://github.com/itangqiao/full-books/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    outline: {
      label: '页面导航',
    },
    returnToTopLabel: '回到顶部',
    footer: {
      message: '转载或 Copy 请标注本站原文地址',
      copyright: 'Copyright © 2022 - new精致的生活'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/itangqiao/full-books' }
    ]
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
      importantLabel: '重要'
    }
  }
})
