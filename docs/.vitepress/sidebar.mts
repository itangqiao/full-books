export default {
  'fe': { base: '/fe/', items: sideBar() }
}

function sideBar() {
  return [
    {
      text: '简介',
      link: '/introduction/index'
    },
    {
      text: 'JavaScript',
      items: [
        { text: '基础', link: '/javascript/index' },
        {
          text: '深入知识',
          items: [
            { text: '闭包', link: '/javascript/closure' },
            { text: '浏览器', link: '/javascript/browser' },
            
          ]
        },
        { text: '函数式编程', link: '/javascript/fp' },
      ]
    },
    {
      text: 'TypeScript 基础',
      link: '/typescript/index'
    },
    {
      text: 'Vue 基础',
      link: '/vue/index'
    },
    {
      text: 'Node.js',
      link: '/node/index'
    },
    {
      text: '工程化',
      link: '/engineering/index'
    },
    {
      text: '浏览器和网络',
      link: '/browser/index'
    },
  ]
}