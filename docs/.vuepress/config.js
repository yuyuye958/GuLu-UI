module.exports = {
    base: '/GuLu-UI/',
    title: 'GuLu - UI',
    description: '一个美观易用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/yuyuye958/GuLu-UI' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/',
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ]
    }
}