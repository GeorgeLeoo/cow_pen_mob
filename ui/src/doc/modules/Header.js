export default {
    title: '',
    componentName: 'Header',
    desc: '',
    props: [
        {
            title: '属性',
            desc: '',
            children: [
                {
                    prop: 'title',
                    type: 'String',
                    default: '',
                    desc: '标题文案'
                },
                {
                    prop: 'titleSize',
                    type: 'Number',
                    default: 26,
                    desc: '标题大小'
                },
                {
                    prop: 'theme',
                    type: 'String',
                    default: 'dark',
                    desc: '标题主题，可选dark、light'
                },
                {
                    prop: 'background',
                    type: 'String',
                    default: 'rgba(255,255,255, 0.97)',
                    desc: '标题背景色'
                },
                {
                    prop: 'position',
                    type: 'String',
                    default: 'center',
                    desc: '标题位置，可选center、right'
                },
                {
                    prop: 'back',
                    type: 'Boolean',
                    default: false,
                    desc: '是否显示返回按钮'
                },
                {
                    prop: 'hideTitle',
                    type: 'Boolean',
                    default: false,
                    desc: '是否隐藏标题'
                },
                {
                    prop: 'custom',
                    type: 'Boolean',
                    default: false,
                    desc: '是否是自定义Header'
                },
                {
                    prop: 'icons',
                    type: 'Array',
                    default: [],
                    desc: '图标列表，每一项是一个图标路径字符串'
                },
            ]
        }
    ],
    events: [
        {
            title: '事件',
            desc: '',
            children: [
                {
                    event: 'icon-click',
                    params: [
                        {
                            param: 'index',
                            desc: '图标在 icons 中的索引值'
                        },
                    ],
                    desc: '图标的点击事件'
                },
            ]
        }
    ],
    examples: [
        {
            title: '',
            desc: '',
            props: {
                'title': '我是标题',
            },
            events: {
                more () {
                    console.log('more click')
                }
            },
        },
        {
            title: '',
            desc: '',
            props: {
                'title': '我是标题',
                'back': true,
                'titleSize': 28,
                background: 'red',
                theme: 'light'
            },
            events: {
                more () {
                    console.log('more click')
                }
            },
        },
    ]
}
