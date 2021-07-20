<template>
  <div class="jl_wrap" :style="{
    '--height': height,
    }">
    <div class="prefix iconfont" :style="prefix_style" v-if="prefix" v-html="prefix"
      @click.prevent="$emit('prefix_click')">
    </div>
    <div class="input_wrap relative"
      :style="{
        '--width': typeof width == 'number' ? width+'px' : width,
        '--border_color': borderColor,
        cursor: `${disabled ? 'not-allowed' : ''}`,
        borderTopLeftRadius: prefix ? '' : '4px',
        borderBottomLeftRadius: prefix ? '' : '4px',
        borderTopRightRadius: suffix ? '' : '4px',
        borderBottomRightRadius: suffix ? '' : '4px'}">
      <div v-if="prefix_in" class="prefix_in iconfont" v-html="prefix_in"></div>
      <input :type="input_type" v-model="input_value" @input="$emit('input',$event.target.value)"
        :maxlength="maxlength" :disabled="disabled"
        :placeholder="placeholder"
        @change.prevent="$emit('change')"
        @keyup.enter.prevent="$emit('enter')"
        @focus="borderColor = on_border_color;icon_opacity = 1;"
        @blur="borderColor = border_color;icon_opacity = 0;"
        @focus.prevent="$emit('focus')"
        @blur.prevent="$emit('blur')"
        :style="{
          '--input_width': input_width,
          '--indent': prefix_in ? '0' : '1em',
        }">
      <div class="able_wrap"
        :style="{
          '--icon_opacity': icon_opacity
        }">
        <i v-for="a_item,a_index in able_arr" :key="a_index"
          :style="{
            cursor: `${disabled ? 'not-allowed' : ''}`}"
          :class="`iconfont jl-icon-${a_item}`"
          @click.prevent="ableClick(a_item,$event)"></i>
        <div v-if="suffix_in" class="suffix_in iconfont" v-html="suffix_in" 
          @click.prevent="$emit('suffix_in_click')"
          :style="{
            cursor: `${disabled ? 'not-allowed' : ''}`}"></div>
      </div>
    </div>
    <div class="suffix iconfont" :style="suffix_style" v-if="suffix" v-html="suffix"
      @click.prevent="$emit('suffix_click')"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    prefix_in: {
      type: String
    },
    prefix_style: {
      type: Object,
      default: ()=>({})
    },
    prefix: {
      type: String
    },
    suffix_in: {
      type: String
    },
    suffix: {
      type: String
    },
    suffix_style: {
      type: Object,
      default: ()=>({})
    },
    width: {
      type: String/Number,
      default: '100%'
    },
    height: {
      type: String,
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
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    placeholder:{
      type: String
    }
  },
  data() {
    return {
      input_value: '',
      color : 'red',
      styles: {},
      input_width: '',
      borderColor: '',
      input_type: this.type,
      able_arr: [],
      icon_opacity: 0
    }
  },
  methods: {
    propsDetail(){
      if(typeof this.width == 'number'){
        this.input_width = this.width+"px";
      }else{
        this.input_width = this.width;
      }
      if(this.type == 'password'){
        this.able_arr.push('eye');
      }
      if(this.clearable){
        this.able_arr.push('clear')
      }
    },
    ableClick(control,e){
      if(control=='eye'){
        if(this.input_type == 'password'){
          this.input_type = 'text';
        }else{
          this.input_type = 'password';
        }
      }else if(control=='clear'){
        this.input_value = '';
      }else{
        $emit();
      }
    }
  },
  created() {
    this.propsDetail();
  },
  mounted() {
    document.addEventListener('click',function(e){
      let div = e.target;
    })
  },
  destroyed() {
    
  },
}
</script>

<style scoped>
  .jl_wrap{
    display: flex;
  }
  .input_wrap{
    line-height: var(--height);
    border: 1px solid var(--border_color,#dcdfe6);
    display: flex;
    width: var(--width);
    overflow: hidden;
  }
  .input_wrap>input{
    line-height: var(--height);
    border: none;
    flex-grow: 1;
    flex-shrink: 1;
    text-indent: var(--indent,1em);
  }
  .able_wrap{
    display: flex;
    align-items: center;
    overflow: hidden;
    column-gap: 5px;
    position: absolute;
    right: 5px;
    height: var(--height);
  }
  .able_wrap>i{
    cursor: pointer;
    color: var(--info);
    opacity: var(--icon_opacity);
  }
  .able_wrap>i:hover{
    color: var(--border_color);
  }
  .prefix{
    padding: 0 6px;
    color: #fff;
    background-color: var(--info);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    line-height: var(--height);
  }
  .prefix_in{
    padding: 0 6px;
    color: var(--info);
    line-height: var(--height);
  }
  .suffix_in{
    height: var(--height);
    color: var(--info);
    cursor: pointer;
  }
  .suffix_in:hover{
    color: var(--border_color);
  }
  .suffix{
    padding: 0 6px;
    color: #fff;
    background-color: var(--info);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    line-height: var(--height);
  }
</style>