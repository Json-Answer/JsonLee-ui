<template>
  <div class="jl_select_wrap" :style="{
    '--width': width+'px',
    '--options_width': width-2+'px',
    '--height': typeof height == 'number' ? height+'px' : height,
    '--border_color': border_color_show,
    '--display': options_show ? 'block' : 'none'
  }">
    <div class="jl_input_wrap">
      <input class="jl_select_input" type="text" 
        :readonly="inputable == false && filterable == false"
        :placeholder="placeholder"
        @input="input"
        @click="selectOnclick"
        :value="valueTitle">
      <div :class="`iconfont icon ${foldIcon}`"></div>
    </div>
    <ul class="jl_options_wrap" v-if="options_data.length">
      <li class="jl_option_item" 
        v-for="o_item,o_index in options_data"
        :key="o_index"
        @click="pick(o_item,o_index)"
        :class="o_item.value == selectValue ? 'text_on' : ''"
        :style="{'--border_color': on_border_color}">
        {{o_item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 260
    },
    height: {
      type: Number/String,
      default: '2rem'
    },
    border_color: {
      type: String,
      default: '#dcdfe6'
    },
    on_border_color: {
      type: String,
      default: '#409eff'
    },
    inputable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: ()=>([])
    },
    icon: {
      type: String,
      default: 'jl-icon-row-down'
    },
    on_icon: {
      type: String,
      default: 'jl-icon-row-top'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: String/Number,
      default: ''
    }
  },
  data() {
    return {
      options_show: false,
      border_color_show: this.border_color,
      foldIcon: this.icon,
      selectValue: '',
      valueTitle: '',
      options_data: this.options
    }
  },
  methods: {
    input(event){
      let val = event.target.value;
      this.valueTitle = val;
      let valReg = new RegExp(`[${val}]`)
      let oldData = Array.from(new Set(this.options));
      this.options_data = [];
      this.options_show = true;
      oldData.forEach(item => {
        if(valReg.test(item.title)){
          this.options_data.push(item);
        }
      });
    },
    selectOnclick(){
      this.options_data = this.options;
      this.border_color_show = this.on_border_color;
      this.options_show = !this.options_show;
      if(this.options_show){
        this.foldIcon = this.on_icon;
      }else{
        this.foldIcon = this.icon;
      }
    },
    pick(row,index){
      if(this.selectValue !== row.value){
        this.selectValue = row.value;
        this.valueTitle = row.title;
        this.$emit('update:value',row.value);
        this.$emit('change');
      }
      this.foldIcon = this.icon;
      this.options_show = false;
    }
  },
  created() {
    
  },
  mounted() {
    let that = this;
    document.addEventListener('click',function(e){
      let div = e.target;
      let parent = div.parentNode;
      if(parent.className !== "jl_options_wrap" &&
        parent.className !== "jl_select_wrap" &&
        div.className !== "jl_select_input"){
        that.border_color_show = that.border_color;
        that.options_show = false;
        that.foldIcon = that.icon;
      }else{
        that.border_color_show = that.on_border_color;
      }
    })
  },
  destroyed() {
    
  },
  watch: {
    
  }
}
</script>

<style scoped>
  .jl_select_wrap{
    width: var(--width);
    position: relative;
  }
  .jl_select_input{
    width: var(--width);
    line-height: var(--height);
    height: var(--height);
    text-indent: 1em;
    border: 1px solid var(--border_color);
    border-radius: 4px;
    position: relative;
  }
  .jl_input_wrap{
    position: relative;
  }
  .text_on{
    color: var(--border_color);
    font-weight: bold;
  }
  .icon{
    position: absolute;
    top: 0;
    right: 1em;
    line-height: var(--height);
    color: var(--info);
  }
  .jl_options_wrap{
    padding: 5px 0;
    width: var(--options_width);
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    display: var(--display,none);
    position: relative;
    margin-left: 1px;
    border-radius: 4px;
    margin-top: 8px;
  }
  .jl_options_wrap::before{
    content: "";
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -16px;
    left: 25px;
    z-index: 2;
    display: var(--display,none);
  }
  .jl_options_wrap::after{
    content: "";
    width: 0;
    height: 0;
    border: 9px solid transparent;
    border-bottom-color: #dcdfe6;
    position: absolute;
    top: -18px;
    left: 24px;
    z-index: 1;
    display: var(--display,none);
  }
  .jl_option_item{
    width: 100%;
    text-indent: 1rem;
    line-height: var(--option_height,2rem);
  }
  .jl_option_item:hover{
    background-color: #f5f7fa;
  }
  .select_hidden{
    width: var(--width);
  }
</style>