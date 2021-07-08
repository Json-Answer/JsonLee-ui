import Vue from 'vue'
import JlButton from './jl-button'

const jlComponents = [
  {name: 'jl-button',use: JlButton}
]

jlComponents.forEach(item=>{
  Vue.component(item.name,item.use)
})

export default {
  JlButton
}