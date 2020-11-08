export default {
    title: '搜索框',
    componentName: 'Search',
    desc: '',
    props: [
        {
            title: '属性',
            desc: '',
            children: [
                {
                    prop: 'placeholder',
                    type: 'String',
                    default: '前端',
                    desc: ''
                },
            ]
        }
    ],
    events: [
        {
            title: '事件',
            desc: '',
            children: [
            ]
        }
    ],
    examples: [
        {
            title: '',
            desc: '',
            props: {
                placeholder: 'Java',
            },
            events: {
                search () {
                    console.log('search me')
                }
            },
        },
    ]
}
