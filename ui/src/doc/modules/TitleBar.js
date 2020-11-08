export default {
    title: '标题栏',
    componentName: 'TitleBar',
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
                    desc: '标题'
                },
                {
                    prop: 'moreText',
                    type: 'String',
                    default: '',
                    desc: '右侧更多文字'
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
                    event: 'more',
                    params: [],
                    desc: '右侧更多按钮触发事件'
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
                'moreText': '更多 >',
            },
            events: {
                more () {
                    console.log('more click')
                }
            },
        },
    ]
}
