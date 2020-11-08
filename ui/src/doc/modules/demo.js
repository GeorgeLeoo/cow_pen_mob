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
            // 类别名称
            category: '属性',
            // 类别描述
            desc: '',
            children: [
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
            ]
        }
    ],
    // 组件事件
    events: [
        {
            // 类别名称
            category: '',
            // 类别描述
            desc: '',
            children: [
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
            ]
        }
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
                // Button 组件的 trigger 事件，只能以这种格式存在
                // 事件名(参数) { // 函数体  }
                // 转成 methods 中的方法
                // 函数名(参数) { // 函数体  }
                trigger () {
                    console.log('click me')
                }
            },
            // 示例代码
            demo: {
                // 代码描述
                desc: '',
                // 自定义代码，若无则系统自动根据配置生成
                code:`<div></div>`
            },
            // 同级元素 暂无
            siblings: [],
            // 子元素 暂无
            children: [],
        },
    ]
}
