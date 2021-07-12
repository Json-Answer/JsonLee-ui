import './jl-style.css'
import './iconfont/index.css'
import Vue from 'vue'
import JlButton from './jl-button'
import JlInput from './jl-input'
import JlSelect from './jl-select'
import JlTable from './jl-table'

const jlComponents = [
  {name: 'jl-button',use: JlButton},
  {name: 'jl-input',use: JlInput},
  {name: 'jl-select',use: JlSelect},
  {name: 'jl-table',use: JlTable}
]

jlComponents.forEach(item=>{
  Vue.component(item.name,item.use)
})

export default {
  JlButton,
  JlInput,
  JlSelect,
  JlTable
}