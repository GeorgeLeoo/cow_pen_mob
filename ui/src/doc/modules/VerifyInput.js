export default {
    title: '验证码输入框',
    componentName: 'VerifyInput',
    desc: '每输入一个值，光标会自动跳转到下一个位置，知道都输入完为止，会自动触发submit事件',
    props: [
        {
            title: '属性',
            desc: '',
            children: [
                {
                    prop: 'maxLength',
                    type: 'Number',
                    default: '4',
                    desc: '输入框的数量'
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
                    event: 'submit',
                    params: [],
                    desc: '输入完调用的事件'
                },
            ]
        }
    ],
    examples: [
        {
            title: '',
            desc: '',
            props: {
                'v-model': '[]',
            },
            events: {
                submit () {
                    console.log('submit success')
                }
            },
        },
    ]
}
