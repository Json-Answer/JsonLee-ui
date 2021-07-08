# JsonLee-ui
#### 简介/Intro
该UI组件目前只适配于Vue 2.x<br>
The UI component is currently only compatible with Vue 2.x<br>

该组件主要为了自己平时开发便利,不喜勿喷<br>
This component is mainly used for their usual development convenience, don't like fling abuses<br>

该组件刚开始开发,后续将持续更新<br>
This component has just been developed and will continue to be updated

欢迎提出建议和反馈<br>
邮箱: 2622336659@qq.com / jsonlee1017@163.com

#### 下载/Install
cd download-directory<br>
git clone https://gitee.com/jsonlee_lee/json-lee-ui.git

#### 快速入手/Quick Start
import Vue from 'vue'
import JsonLeeUI from 'json-lee-ui'

Vue.use(JsonLeeUI)

#### 文档/Document
##### 按钮/Button
###### 参数: icon
说明: 图标类名<br>
类型: String<br>
可选值: --<br>
默认值: --

###### 参数: type
说明: 类型<br>
类型: String<br>
可选值: 1.primary 主要的 背景色-#409eff<br>
       2.success 成功 背景色-#67c23a<br>
       3.info 信息 背景色-#909399<br>
       4.danger 失败 背景色-#f56c6c<br>
       5.warning 警告 背景色-orange<br>
默认值: primary

###### 参数: bg_color
说明: 背景颜色<br>
类型: String<br>
可选值: --<br>
默认值: --

###### 参数: color
说明: 字体颜色<br>
类型: String<br>
可选值: --<br>
默认值: #fff

###### 参数: padding
说明: 内边距<br>
类型: String<br>
可选值: --<br>
默认值: 5px 12px

###### 参数: border
说明: 边框<br>
类型: String<br>
可选值: --<br>
默认值: --

###### 参数: round
说明: 是否圆角<br>
类型: Boolean<br>
可选值: true/false<br>
默认值: false

###### 参数: circle
说明: 是否圆形<br>
类型: Boolean<br>
可选值: true/false<br>
默认值: false

###### 参数: fontSize
说明: 字体大小<br>
类型: Number //单位为px<br>
可选值: --<br>
默认值: 16

###### 参数: custom_style
说明: 自定义样式<br>
类型: Object<br>
可选值: --<br>
默认值: --

###### 参数: active_bg_color
说明: hover背景颜色<br>
类型: String<br>
可选值: --<br>
默认值: --

###### 参数: active_color
说明: hover字体颜色<br>
类型: String<br>
可选值: --<br>
默认值: --

###### 参数: active_style
说明: hover自定义样式<br>
类型: Object<br>
可选值: --<br>
默认值: { opacity: 0.6 }

###### 参数: disabled
说明: 是否禁用<br>
类型: Boolean<br>
可选值: true/false<br>
默认值: false

###### 参数: loading
说明: 是否加载中<br>
类型: Boolean<br>
可选值: true/false<br>
默认值: false