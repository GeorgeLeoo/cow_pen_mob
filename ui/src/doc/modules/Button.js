export default {
    title: '按钮',
    componentName: 'Button',
    desc: '按钮组件相关属性和设置',
    props: [
        {
            title: '属性',
            desc: '',
            children: [
                {
                    prop: 'size',
                    type: 'String',
                    default: 'middle',
                    desc: '按钮大小，可选值有small、middle、large'
                },
                {
                    prop: 'block',
                    type: 'Boolean',
                    default: 'true',
                    desc: '按钮是否独占一行'
                },
                {
                    prop: 'circle',
                    type: 'Boolean',
                    default: 'true',
                    desc: '按钮是否为圆形'
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
                    event: 'trigger',
                    params: [
                        {
                            param: 'row',
                            desc: 'item 项数据'
                        },
                        {
                            param: 'index',
                            desc: '点击的索引'
                        },
                    ],
                    desc: '按钮点击事件'
                },
            ]
        }
    ],
    examples: [
        {
            title: 'circle按钮',
            desc: 'circle按钮circle按钮circle按钮',
            props: {
                circle: true,
                'v-model': '2'
            },
            slots: {
                default: 'click me',
                icon: 'icon'
            },
            events: {
                trigger () {
                    console.log('click me')
                    console.log('click me1')
                },
    
                com () {
                    console.log('click me')
                }
            },
            demo: {
                desc: '',
                code:``
            },
            imgList: []
        },
        {
            title: 'circle、block按钮',
            desc: 'circle按钮block按钮circle按钮',
            props: {
                block: false,
                circle: true,
            },
            slots: {
                default: 'click me',
            },
            events: {
                trigger () {
                    console.log('click me')
                }
            }
        },
    ]
}
