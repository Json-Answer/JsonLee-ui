# JsonLee-ui
### 简介/Intro
该UI组件目前只适配于Vue 2.x<br>
The UI component is currently only compatible with Vue 2.x<br>

该组件主要为了自己平时开发便利,不喜勿喷<br>
This component is mainly used for their usual development convenience, don't like fling abuses<br>

该组件刚开始开发,后续将持续更新<br>
This component has just been developed and will continue to be updated

欢迎提出建议和反馈<br>
邮箱: 2622336659@qq.com / jsonlee1017@163.com

### 下载/Install
`cd download-directory`
`git clone https://gitee.com/jsonlee_lee/json-lee-ui.git`

### 快速入手/Quick Start
`import Vue from 'vue'`<br>
`import JsonLeeUI from 'json-lee-ui'`

`Vue.use(JsonLeeUI)`

### 文档/Document
#### 主题色
1.primary 主要的--#409eff<br>
2.success 成功--#67c23a<br>
3.info 信息--#909399<br>
4.danger 失败--#f56c6c<br>
5.warning 警告--orange<br>

#### 按钮/Button
###### 属性/Attributes
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| icon | 图标名称 | String | -- | -- |
| type | 类型 | String | primary/success/info/warning/danger | primary |
| bg_color | 背景颜色 | String | -- | -- |
| color | 字体颜色 | String | -- | #fff |
| padding | 内边距 | String | -- | 6px 12px |
| border | 边框 | String | -- | -- |
| round | 是否圆角 | Boolean | true/false | false |
| circle | 是否圆形 | Boolean | true/false | false |
| fontSize | 字体大小 | Number(单位为px) | -- | 16 |
| custom_style | 自定义样式 | Object | -- | -- |
| active_bg_color | hover背景颜色 | String | -- | -- |
| active_color | hover字体颜色 | String | -- | -- |
| active_style | hover自定义样式 | Object | -- | -- |
| disabled | 是否禁用 | Boolean | true/false | false |
| loading | 是否加载中 | Boolean | true/false | false |

#### 输入框/Input
###### 属性/Attributes
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 类型(原生属性) | String | [原生属性][input_type] | text |
| v-model | 绑定值 | String/Number | -- | -- |
| maxlength | 最大长度(原生属性) | Number | -- | -- |
| placeholder | 占位文本(原生属性) | String | -- | -- |
| width | 输入框宽度 | String/Number(单位px) | -- | 100% |
| height | 输入框高度 | String | -- | 2rem |
| border_color | 边框颜色 | String | -- | #dcdfe6 |
| on_border_color | 输入框聚焦时的边框颜色 | String | -- | #409eff |
| clearable | 是否可清空 | true/false | false |
| disabled | 是否禁用 | true/false | false |
| prefix_style | 输入框前面内容的自定义样式 | Object | -- | -- |
| suffix_style | 输入框后面内容的自定义样式 | Object | -- | -- |

###### 内容属性/Slots
| 名字 | 说明 |
| ---- | ---- |
| prefix | 输入框前面内容, 可识别HTML标签及字体图标 |
| prefix_in | 输入框头部的内容,可识别HTML标签及字体图标 |
| suffix | 输入框后面的内容,可识别HTML标签及字体图标 |
| suffix_in | 输入框尾部的内容,可识别HTML标签及字体图标 |

###### 事件属性/Event
| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| blur | input失去焦点时触发 | -- |
| focus | input获得焦点时触发 | -- |
| change | 原生输入框失去值改变时触发 | -- |
| enter | 按下回车时触发 | -- |

[input_type]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types