<template>
  <div class="btn_wrap jl-button" @click.prevent="clicked" :style="styles" @mouseover="mouseOver" @mouseout="mouseLeave">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    bg_color: {
      type: String
    },
    color: {
      type: String,
      default: '#fff'
    },
    padding: {
      type: String,
      default: '5px 12px'
    },
    border: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: Number,
      default: 16
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    custom_style: {
      type: Object,
      default: ()=>({})
    },
    active_color: {
      type: String
    },
    active_bg_color: {
      type: String
    },
    active_style: {
      type: Object,
      default: ()=>({
        opacity: '0.6'
      })
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      styles: {},
      paddingTop: 0,
      styleBefore: ''
    }
  },
  created() {
    this.styleChange();
  },
  beforeMount(){
    
  },
  mounted() {
    
  },
  methods: {
    clicked(){
      if(!this.disabled && !this.loading){
        this.$emit('click');
      }
    },
    styleChange(){
      switch (this.type){
        case 'primary':
          this.styles.backgroundColor = '#409eff';
          break;
        case 'success':
          this.styles.backgroundColor = '#67c23a';
          break;
        case 'info':
          this.styles.backgroundColor = '#909399';
          break;
        case 'danger':
          this.styles.backgroundColor = '#f56c6c';
          break;
        case 'warning':
          this.styles.backgroundColor = 'orange';
      }
      if(this.bg_color){
        this.styles.backgroundColor = this.bg_color;
      }
      this.styles.color = this.color;
      this.styles.padding = this.padding;
      this.styles.border = this.border;
      this.styles.fontSize = this.fontSize + 'px';
      if(this.circle){
        this.styles.borderRadius = '50%';
      }
      if(this.round){
        this.styles.borderRadius = '9999px';
      }
      if(this.disabled){
        this.styles.cursor = 'not-allowed';
      }
      if(this.loading){
        this.styles.cursor = 'wait';
      }
      if(Object.keys(this.custom_style).length){
        Object.keys(this.custom_style).forEach(item=>{
          this.styles[item] = this.custom_style[item];
        })
      }
    },
    mouseOver(event){
      let that = event.target;
      this.styleBefore = that.getAttribute('style');
      if(this.active_color && this.active_bg_color){
        this.active_style = {}
        that.style.color = this.active_color;
        that.style.backgroundColor = this.active_bg_color;
      }else if(this.active_color){
        that.style.color = this.active_color;
      }else if(this.active_bg_color){
        that.style.backgroundColor = this.active_bg_color;
      }else{
        Object.keys(this.active_style).forEach(item=>{
          that.style[item] = this.active_style[item];
        })
      }
    },
    mouseLeave(event){
      let that = event.target;
      that.style = this.styleBefore;
    }
  },
}
</script>

<style scoped>
  .btn_wrap{
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
  }
</style>