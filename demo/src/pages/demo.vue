<template>
  <div>
    <jl-button type="primary" class="margin10" @click="test">默认</jl-button>
    <jl-button type="success" class="margin20">成功</jl-button>
    <jl-button type="info">信息</jl-button>
    <jl-button type="danger">失败</jl-button>
    <jl-button type="warning">警告</jl-button>
    <jl-button loading>加载中</jl-button>
    <jl-button disabled :custom_style="{margin: '10px'}">禁用</jl-button>
    <jl-input v-model="value" @change="inputChange" class="margin10"
      placeholder="请输入内容" prefix_in="&#xe658;"
      @enter="enter2" :width="300" type="password" :maxlength="6"
      @blur="blur2" clearable></jl-input>
    <jl-input v-model="value" @change="inputChange" class="margin10"
      placeholder="请输入内容" prefix="电话&#xe60d;"
      @enter="enter2" :width="300" type="password" :maxlength="6"
      @blur="blur2" clearable
      @prefix_click="p_test"
      :prefix_style="{backgroundColor: 'orange'}"></jl-input>
    <jl-input v-model="value" @change="inputChange" class="margin10"
      placeholder="该输入框暂不支持输入"
      @enter="enter2" :width="300" type="password" :maxlength="6"
      @blur="blur2" clearable
      @prefix_click="p_test"
      suffix_in="&#xe75b;"
      disabled></jl-input>
    <jl-input v-model="value" @change="inputChange" class="margin10"
      placeholder="请输入内容"
      @enter="enter2" :width="300" type="password" :maxlength="6"
      @blur="blur2" clearable
      @prefix_click="p_test"
      suffix_in="&#xe75b;"
      suffix=".com"></jl-input>
    <jl-select :height="40" class="margin10" filterable
      :options="options" :value.sync="selectValue" @change="valueChange"></jl-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      testSet: {
        name: '',
        age: 0
      },
      options: [{
        value: 'first',
        title: '怪兽'
      },{
        value: 'second',
        title: '凹凸曼'
      },{
        value: 'third',
        title: '张大仙'
      },{
        value: 'forth',
        title: '妖怪'
      }],
      selectValue: ''
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    valueChange(){
      console.log(this.selectValue);
    },
    test(){
      console.log("默认");
    },
    p_test(){
      console.log('prefix');
    },
    inputChange(){
      // console.log(this.value);
    },
    enter2(){
      console.log(1);
    },
    blur2(){
      console.log(this.value);
    }
  },
  destroyed() {
    
  },
  filters: {

  },
  delete: {

  }
}
</script>

<style scoped>

</style>