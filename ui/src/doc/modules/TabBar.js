import {
    homeSelected,
    homeUnSelected,
    mineSelected,
    mineUnSelected
} from '@/icon'

export default {
    title: 'TabBar',
    componentName: 'TabBar',
    desc: '按钮组件相关属性和设置',
    props: [
        {
            title: '属性',
            desc: '',
            children: [
                {
                    prop: 'tab',
                    type: 'Object',
                    default: '',
                    desc: 'TabBar相关配置，以下属性都是tab的子项'
                },
            ]
        },
        {
            title: 'tab 属性',
            desc: '',
            children: [
                {
                    prop: 'color',
                    type: 'String',
                    default: '#999999',
                    desc: '未选中字体颜色'
                },
                {
                    prop: 'selectedColor',
                    type: 'String',
                    default: '#007aff',
                    desc: '选中时字体颜色'
                },
                {
                    prop: 'backgroundColor',
                    type: 'String',
                    default: '#ffffff',
                    desc: '背景色'
                },
                {
                    prop: 'height',
                    type: 'String',
                    default: '100px',
                    desc: '高度'
                },
                {
                    prop: 'fontSize',
                    type: 'String',
                    default: '24px',
                    desc: '字体大小'
                },
                {
                    prop: 'iconWidth',
                    type: 'String',
                    default: '24px',
                    desc: '图标大小'
                },
                {
                    prop: 'spacing',
                    type: 'String',
                    default: '4px',
                    desc: '图标与文字之间的间距'
                },
                {
                    prop: 'list',
                    type: 'Array',
                    default: '',
                    desc: 'TabBar数据项,以下是list的配置项'
                },
            ]
        },
        {
            title: 'list 属性',
            desc: '',
            children: [
                {
                    prop: 'text',
                    type: 'String',
                    default: '',
                    desc: 'TabBar的文案'
                },
                {
                    prop: 'path',
                    type: 'String',
                    default: '',
                    desc: 'TabBar对应的路由'
                },
                {
                    prop: 'selected',
                    type: 'String',
                    default: '',
                    desc: '选中时的图标'
                },
                {
                    prop: 'path',
                    type: 'unselected',
                    default: '',
                    desc: '未选中时的图标'
                },
            ]
        },
    ],
    examples: [
        {
            title: 'TabBar',
            desc: '',
            props: {
                fixed: false,
                tab: {
                    color: '#7A7E83',
                    selectedColor: 'rgb(51 140 255)',
                    backgroundColor: 'rgba(255, 255, 255, 0.97)',
                    height: '50px',
                    fontSize: '10px',
                    iconWidth: '24px',
                    spacing: '3px',
                    list: [
                        {
                            text: '首页',
                            path: '/home',
                            selected: homeSelected,
                            unselected: homeUnSelected
                        },
                        {
                            text: '发现',
                            path: '/mine',
                            selected: mineSelected,
                            unselected: mineUnSelected
                        },
                        {
                            text: '我的',
                            path: '/mine',
                            selected: mineSelected,
                            unselected: mineUnSelected
                        },
                    ]
                }
            },
            demo: {
                desc: '',
                code: ``
            }
        }
    ]
}
