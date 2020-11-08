<template>
    <div id="app">
        <div class="head">
            <h1>Cow Pen Mobile UI组件库</h1>
        </div>
        <div class="main">
            <div>
                <el-menu
                    :default-active="defaultActive"
                    class="el-menu-vertical"
                    @select="handlerMenuSelected"
                >
                    <el-menu-item v-for="(route, index) in menuList" :key="index" :index="route.name">
                        <span slot="title">{{route.name}}</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="right">
                <keep-alive>
                    <div>
                        <div class="bg-white">
                            <template
                                v-if="currentDoc[active] && (currentDoc[active].title || currentDoc[active].componentName)">
                                <h1 class="sub-title">
                                    <template v-if="currentDoc[active].title === currentDoc[active].componentName">
                                        {{currentDoc[active].title}}
                                    </template>
                                    <template v-else>
                                        {{currentDoc[active].title}}
                                        {{currentDoc[active].componentName}}
                                    </template>
                                </h1>
                            </template>
                            <template v-else>
                                <h1 class="sub-title">{{$route.name}}</h1>
                            </template>

                            <p v-if="currentDoc[active]" class="components-desc pt0">{{currentDoc[active].desc}}</p>
                        </div>

                        <div class="example bg-white">
                            <h2 class="sub-title">示例</h2>
                            <div v-if="currentDoc[active] && currentDoc[active].examples">
                                <div v-for="(item, index) in currentDoc[active].examples" :key="index"
                                     class="example-item">

                                    <div class="mob">
                                        <div v-if="item.title || item.desc" class="mob-top">
                                            <h2 v-if="item.title" class="sub-title pt0">{{item.title}}</h2>
                                            <p v-if="item.desc" class="components-desc pt0">{{item.desc}}</p>
                                        </div>
                                        <div class="container">
                                            <TemplateComponent :component="currentDoc[active].component"
                                                               :data="item"/>
                                        </div>
                                    </div>

                                    <div class="img-list">
                                        <img v-for="(img, index) in item.imgList" :key="index" :src="img" alt="">
                                    </div>

                                    <div class="code-wrapper">
                                        <el-collapse @change="handlerChange($event, index)">
                                            <el-collapse-item name="1">
                                                <template slot="title"><p class="show-code-btn">
                                                    {{showCollapse && index === collapseIndex ? '隐藏' : '显示'}}代码</p>
                                                </template>
                                                <div>
                                                    <p v-if="item.demo && item.demo.desc"
                                                       class="components-desc pt0">
                                                        {{item.demo.desc}}</p>
                                                    <pre v-if="item.demo && item.demo.code">
                                                                <code>{{item.demo.code}}</code>
                                                            </pre>
                                                    <pre v-else>
                                                                <code>{{generateCode(item)}}</code>
                                                            </pre>
                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="mob">
                                <router-view/>
                            </div>
                        </div>

                        <div v-if="currentDoc[active]">
                            <div v-if="currentDoc[active].props" class="doc">
                                <div v-for="(prop, index) in currentDoc[active].props" :key="index" class="bg-white">
                                    <h2 v-if="prop.title" class="sub-title">{{prop.title}}</h2>
                                    <p v-if="prop.desc" class="components-desc">{{prop.desc}}</p>
                                    <el-table
                                        :data="prop.children"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="prop"
                                            label="属性名"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="type"
                                            label="类型"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="default"
                                            label="默认值"
                                            width="200">
                                            <template slot-scope="scope">
                                                <span
                                                    class="item">{{scope.row.default ? scope.row.default : '--'}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="desc"
                                            label="说明">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>

                            <div v-if="currentDoc[active].events" class="doc">
                                <div v-for="(event, index) in currentDoc[active].events" :key="index" class="bg-white">
                                    <h2 v-if="event.title" class="sub-title">{{event.title}}</h2>
                                    <p v-if="event.desc" class="components-desc">{{event.desc}}</p>
                                    <el-table
                                        :data="event.children"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="event"
                                            label="事件名"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="params"
                                            label="参数（参数名: 参数注释）">
                                            <template slot-scope="scope">
                                                <div class="params">
                                                    <div v-for="item in scope.row.params" :key="item.param"
                                                         class="param">
                                                        <span class="item">{{item.param}}: </span>
                                                        <span class="item">{{item.desc ? item.desc : '--'}}</span>
                                                    </div>
                                                    <div v-if="scope.row.params.length === 0" class="param">
                                                        <span class="item">-</span>
                                                    </div>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="desc"
                                            label="说明">
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-else class="doc">
                            <span class="empty">暂无文档</span>
                        </div>
                    </div>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import { Menu, MenuItem, Table, TableColumn, Collapse, CollapseItem } from 'element-ui'
// import * as monaco from 'monaco-editor'
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
// Vue.use(hljs.vuePlugin);

import router from './router'
import TemplateComponent from './TemplateComponent'

export default {
    name: 'App',
    components: {
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem,
        TemplateComponent,
    },
    data () {
        return {
            menuList: [],
            defaultActive: '',
            active: '',
            currentDoc: {},
            CurrentComponent: null,
            doc: {},
            collapseIndex: 0,
            // collapseActive: "",
            showCollapse: false,
            monacoInstance: null,
            code: ''
        }
    },
    computed: {},
    filters: {},
    mounted () {
        this.menuList = router.options.routes
        this.defaultActive = router.options.routes[0].name
        this.active = this.defaultActive
        this.generateDoc()
    },
    methods: {
        handlerMenuSelected (index) {
            this.active = index
            this.$router.push({ name: index }).then(() => {}).catch(() => {})
            if (!this.currentDoc[index]) {
                this.generateDoc()
            }
            this.collapseIndex = 0
            this.showCollapse = false
            // this.collapseActive = ""
        },
        handlerChange (e, i) {
            this.collapseIndex = i
            this.showCollapse = e[0] === '1'
        },
        async generateDoc () {
            for (const menu of this.menuList) {
                if (menu.name === this.active) {
                    this.CurrentComponent = menu.component
                    let doc = menu.component.doc
                    if (doc) {
                        this.currentDoc[this.active] = doc
                        this.currentDoc[this.active].component = menu.component
                    } else {
                        this.currentDoc[this.active] = null
                    }
                }
            }
        },
        generateProps (props) {
            let result = []
            for (const propsKey in props) {
                if (propsKey === 'v-model') {
                    result.push(`${propsKey}='value'\n\t`)
                } else {
                    result.push(`:${propsKey}='${propsKey}'\n\t`)
                }
            }
            return result.join(' ')
        },
        generateData (props) {
            let result = []
            for (const propsKey in props) {
                let json = JSON.stringify(props[propsKey], 2, 2)
                json = json.replaceAll('\n', '\n\t\t\t')
                if (json === '"{}"' || json === '"[]"') {
                    json = json.replaceAll('"', '')
                }
                if (propsKey === 'v-model') {
                    result.push(`value: ${json},`)
                } else {
                    result.push(`${propsKey}: ${json},`)
                }
            }
            return result.join('\n\t\t\t')
        },
        generateMethods (events) {
            let result = []
            for (let eventName in events) {
                let fn = (events[eventName] + '').replaceAll('\n', '\n\t\t')
                fn = fn.replaceAll('function', '')
                fn = fn.replace(eventName, '')
                let arr = fn.split('\n')
                arr.splice(arr.length - 1, 1)
                fn = arr.join('\n')
                fn = fn + '\n\t\t},'
                eventName = eventName.charAt(0).toLocaleUpperCase() + eventName.substring(1, eventName.length)
                result.push(`\thandler${eventName}${fn}`)
            }
            return result.join(' ')
        },
        generateEvents (events) {
            let result = []
            for (let eventName in events) {
                let defaultName = eventName
                eventName = eventName.charAt(0).toLocaleUpperCase() + eventName.substring(1, eventName.length)
                result.push(`@${defaultName}='handler${eventName}'\n\t`)
            }
            return result.join(' ')
        },
        generateCode (item) {
            const props = this.generateProps(item.props)
            const events = this.generateEvents(item.events)
            let result = '\n<template>'
            result += '\n\t<' + this.active
            if (props.length > 0 || events.length > 0) {
                result += '\n\t'
            }
            if (props.length > 0) {
                result += ' ' + props
            }
            if (events.length > 0) {
                result += ' ' + events
            }
            result += '></' + this.active + '>'
            result += '\n</template>'
            result += '\n'
            result += '\n<script>'
            result += '\nexport default {'
            result += '\n\tdata() {'
            result += '\n\t\treturn {'
            result += '\n\t\t\t' + this.generateData(item.props)
            result += '\n\t\t}'
            result += '\n\t},'
            result += '\n\tmethods: {'
            result += '\n\t' + this.generateMethods(item.events)
            result += '\n\t},'
            result += '\n}'
            result += '\n</' + 'script>'
            return result
        }
    }
}
</script>

<style lang="less">
html {
    background-color: #f7f8fa;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .head {
        height: 60px;
        background-color: #fff;
        box-shadow: 1px 3px 3px #e7e7e7;
        margin-bottom: 30px;

        h1 {
            width: 1200px;
            padding: 0 15px;
            margin: 0 auto;
            line-height: 60px;
        }
    }


    .main {
        display: flex;
        flex-direction: row;
        width: 1200px;
        margin: 0 auto;
    }

    .right {
        flex: 1;
        padding: 0 30px 30px;
    }

    .bg-white {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 0 6px #f1f1f1;
        margin-bottom: 15px;
        padding: 15px;
    }


    .right-title {
        font-size: 20px;
        font-weight: 500;
    }


    .components-desc {
        font-size: 16px;
        color: #4e4e4e;
        padding: 30px 0;
    }

    .doc {
        //padding: 30px 0;

        .empty {
            font-size: 16px;
            color: #999999;
        }
    }

    .example {
    }

    .mob {
        width: 375px;
        border: 1px solid #f1f1f1;
        background-color: #f7f8fa;

        .mob-top {
            padding: 15px;
            background-color: #fff;
        }

        .container {
            padding: 15px;
        }
    }


    .el-menu-vertical {
        width: 200px;
        position: sticky;
        top: 0;
        user-select: none;
    }


    .sub-title {
        font-size: 20px;
        font-weight: 500;
        padding: 30px 0;
    }

    .params {
        .param {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .item {
            display: inline-block;
        }

        .item:first-child {
            padding-right: 10px;
        }
    }

    .example-item {
        padding: 15px;
        margin-right: 15px;
        margin-bottom: 30px;
        border: 1px solid #f1f1f1;
    }

    .pt0 {
        padding-top: 0;
    }

    .code-wrapper {
        margin-top: 30px;
    }

    .show-code-btn {
        width: 100%;
        text-align: center;
        font-size: 12px;
        user-select: none;
        color: #777777;

        &:hover {
            color: #007aff;
        }
    }


    .center {
        text-align: center;
    }


    .default {
        padding-left: 15px;
    }

}
</style>
