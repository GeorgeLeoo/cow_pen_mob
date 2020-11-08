export default {
    // 标题
    title: '按钮',
    // 组件名
    componentName: 'Button',
    // 组件描述
    desc: '按钮组件相关属性和设置',
    // 组件属性
    props: [
        {
            // 属性
            prop: 'size',
            // 数据类型
            type: 'String',
            // 默认值
            default: 'middle',
            // 属性说明
            desc: '按钮大小，可选值有small、middle、large'
        },
    ],
    // 组件事件
    events: [
        {
            // 事件名
            event: 'trigger',
            // 事件描述说明
            desc: '按钮点击事件',
            // 参数
            params: [
                {
                    // 参数名
                    param: 'row',
                    // 参数说明
                    desc: 'item 项数据'
                },
                {
                    param: 'index',
                    desc: '点击的索引'
                },
            ],
        },
    ],
    // 示例
    examples: [
        {
            // 标题
            title: 'circle按钮',
            // 描述
            desc: 'circle按钮circle按钮circle按钮',
            // 属性
            props: {
                circle: true,
            },
            // 插槽
            slots: {
                // 默认 slot
                default: 'click me',
                // 具名 slot
                icon: 'icon'
            },
            // 事件
            events: {
                // Button 组件的 trigger 事件
                trigger () {
                    console.log('click me')
                }
            },
            // demo
            demo: {
                // 代码描述
                desc: '',
                // 代码
                code:`<div></div>`
            }
        },
    ]
}
